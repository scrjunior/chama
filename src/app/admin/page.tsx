"use client";

import { useEffect, useMemo, useState } from "react";

const GOOGLE_FONT =
  "https://fonts.googleapis.com/css2?family=Sora:wght@600;800&family=DM+Sans:wght@300;400;500&display=swap";

type PassageiroItem = {
  id: string;
  nome: string;
  apelido: string;
  documento: string;
  email: string;
  criadoEm: string;
};

type TaxistaItem = {
  id: string;
  nome: string;
  apelido: string;
  documento: string;
  email: string;
  disponivel: boolean;
  criadoEm: string;
  moto: null | {
    id?: string;
    nomeMoto: string;
    matricula: string;
  };
};

type Stats = {
  passageiros: number;
  taxistas: number;
  viagens: number;
};

type EditUser =
  | {
      tipo: "passageiro";
      data: PassageiroItem;
    }
  | {
      tipo: "taxista";
      data: TaxistaItem;
    }
  | null;

export default function AdminPage() {
  const [stats, setStats] = useState<Stats>({
    passageiros: 0,
    taxistas: 0,
    viagens: 0,
  });

  const [passageiros, setPassageiros] = useState<PassageiroItem[]>([]);
  const [taxistas, setTaxistas] = useState<TaxistaItem[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editUser, setEditUser] = useState<EditUser>(null);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(
    null
  );

  const [fNome, setFNome] = useState("");
  const [fApelido, setFApelido] = useState("");
  const [fDocumento, setFDocumento] = useState("");
  const [fEmail, setFEmail] = useState("");
  const [fSenha, setFSenha] = useState("");
  const [fNomeMoto, setFNomeMoto] = useState("");
  const [fMatricula, setFMatricula] = useState("");
  const [fDisponivel, setFDisponivel] = useState(false);

  async function carregarTudo() {
    setLoading(true);
    setMsg(null);

    try {
      const [statsRes, passageirosRes, taxistasRes] = await Promise.all([
        fetch("/api/admin/stats", { cache: "no-store" }),
        fetch("/api/admin/passageiros", { cache: "no-store" }),
        fetch("/api/admin/taxistas", { cache: "no-store" }),
      ]);

      const statsData = await statsRes.json().catch(() => null);
      const passageirosData = await passageirosRes.json().catch(() => null);
      const taxistasData = await taxistasRes.json().catch(() => null);

      if (!statsRes.ok || !passageirosRes.ok || !taxistasRes.ok) {
        setMsg({
          type: "err",
          text: "Não foi possível carregar o painel administrativo.",
        });
        return;
      }

      setStats(statsData.stats);
      setPassageiros(passageirosData.passageiros || []);
      setTaxistas(taxistasData.taxistas || []);
    } catch {
      setMsg({ type: "err", text: "Erro de rede ao carregar o painel." });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarTudo();
  }, []);

  function abrirEdicaoPassageiro(p: PassageiroItem) {
    setEditUser({ tipo: "passageiro", data: p });
    setFNome(p.nome);
    setFApelido(p.apelido);
    setFDocumento(p.documento);
    setFEmail(p.email);
    setFSenha("");
    setFNomeMoto("");
    setFMatricula("");
    setFDisponivel(false);
  }

  function abrirEdicaoTaxista(t: TaxistaItem) {
    setEditUser({ tipo: "taxista", data: t });
    setFNome(t.nome);
    setFApelido(t.apelido);
    setFDocumento(t.documento);
    setFEmail(t.email);
    setFSenha("");
    setFNomeMoto(t.moto?.nomeMoto || "");
    setFMatricula(t.moto?.matricula || "");
    setFDisponivel(!!t.disponivel);
  }

  function fecharEdicao() {
    setEditUser(null);
    setFNome("");
    setFApelido("");
    setFDocumento("");
    setFEmail("");
    setFSenha("");
    setFNomeMoto("");
    setFMatricula("");
    setFDisponivel(false);
  }

  const canSave = useMemo(() => {
    if (!editUser) return false;

    if (
      fNome.trim().length < 2 ||
      fApelido.trim().length < 2 ||
      fDocumento.trim().length < 3 ||
      fEmail.trim().length < 4
    ) {
      return false;
    }

    if (editUser.tipo === "taxista") {
      if (fNomeMoto.trim().length < 2 || fMatricula.trim().length < 3) {
        return false;
      }
    }

    return true;
  }, [
    editUser,
    fNome,
    fApelido,
    fDocumento,
    fEmail,
    fNomeMoto,
    fMatricula,
  ]);

  async function guardarEdicao() {
    if (!editUser || !canSave) return;

    setSaving(true);
    setMsg(null);

    try {
      const url =
        editUser.tipo === "passageiro"
          ? `/api/admin/passageiros/${editUser.data.id}`
          : `/api/admin/taxistas/${editUser.data.id}`;

      const body =
        editUser.tipo === "passageiro"
          ? {
              nome: fNome,
              apelido: fApelido,
              documento: fDocumento,
              email: fEmail,
              senha: fSenha,
            }
          : {
              nome: fNome,
              apelido: fApelido,
              documento: fDocumento,
              email: fEmail,
              senha: fSenha,
              disponivel: fDisponivel,
              moto: {
                nomeMoto: fNomeMoto,
                matricula: fMatricula,
              },
            };

      const res = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setMsg({
          type: "err",
          text: data?.error || "Não foi possível atualizar o utilizador.",
        });
        return;
      }

      setMsg({ type: "ok", text: "Utilizador atualizado com sucesso." });
      fecharEdicao();
      await carregarTudo();
    } catch {
      setMsg({ type: "err", text: "Erro de rede ao atualizar utilizador." });
    } finally {
      setSaving(false);
    }
  }

  async function apagarPassageiro(id: string) {
    const ok = window.confirm(
      "Tem certeza que deseja apagar este passageiro? As viagens ligadas a ele também serão removidas."
    );
    if (!ok) return;

    setDeletingId(id);
    setMsg(null);

    try {
      const res = await fetch(`/api/admin/passageiros/${id}`, {
        method: "DELETE",
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setMsg({
          type: "err",
          text: data?.error || "Não foi possível apagar o passageiro.",
        });
        return;
      }

      setMsg({ type: "ok", text: "Passageiro apagado com sucesso." });
      await carregarTudo();
    } catch {
      setMsg({ type: "err", text: "Erro de rede ao apagar passageiro." });
    } finally {
      setDeletingId(null);
    }
  }

  async function apagarTaxista(id: string) {
    const ok = window.confirm(
      "Tem certeza que deseja apagar este taxista? A moto e as viagens ligadas a ele também serão removidas."
    );
    if (!ok) return;

    setDeletingId(id);
    setMsg(null);

    try {
      const res = await fetch(`/api/admin/taxistas/${id}`, {
        method: "DELETE",
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setMsg({
          type: "err",
          text: data?.error || "Não foi possível apagar o taxista.",
        });
        return;
      }

      setMsg({ type: "ok", text: "Taxista apagado com sucesso." });
      await carregarTudo();
    } catch {
      setMsg({ type: "err", text: "Erro de rede ao apagar taxista." });
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <>
      <style>{`
        @import url('${GOOGLE_FONT}');
        .font-display { font-family: 'Sora', sans-serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 0; height: 0; }
      `}</style>

      <div className="min-h-dvh bg-[#0f1117] text-white font-body">
        <header className="sticky top-0 z-20 border-b border-gray-800 bg-[#111318]/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
            <div>
              <h1 className="font-display text-xl font-bold">Painel Admin</h1>
              <p className="text-sm text-gray-400">
                Gestão de passageiros, taxistas e viagens
              </p>
            </div>

            <button
              onClick={carregarTudo}
              className="px-4 py-2 rounded-xl border border-gray-700 bg-[#1a1f2e] hover:border-gray-500 transition-colors text-sm"
            >
              Atualizar
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {msg ? (
            <div
              className={`mb-5 rounded-xl px-4 py-3 text-sm border ${
                msg.type === "ok"
                  ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                  : "bg-red-500/10 text-red-300 border-red-500/20"
              }`}
            >
              {msg.text}
            </div>
          ) : null}

          <section className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-800 bg-[#111318] p-5">
              <div className="text-sm text-gray-400">Passageiros cadastrados</div>
              <div className="mt-2 text-3xl font-display font-bold">
                {loading ? "..." : stats.passageiros}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111318] p-5">
              <div className="text-sm text-gray-400">Taxistas cadastrados</div>
              <div className="mt-2 text-3xl font-display font-bold">
                {loading ? "..." : stats.taxistas}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111318] p-5">
              <div className="text-sm text-gray-400">Viagens realizadas</div>
              <div className="mt-2 text-3xl font-display font-bold">
                {loading ? "..." : stats.viagens}
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Considera viagens com status CONCLUIDA
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-2">
            <div className="rounded-2xl border border-gray-800 bg-[#111318] p-4 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-bold">Passageiros</h2>
                <span className="text-xs text-gray-400">
                  {loading ? "..." : passageiros.length} registos
                </span>
              </div>

              <div className="overflow-auto">
                <table className="w-full min-w-[720px] text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-800">
                      <th className="py-3 pr-3">Nome</th>
                      <th className="py-3 pr-3">Apelido</th>
                      <th className="py-3 pr-3">Documento</th>
                      <th className="py-3 pr-3">Email</th>
                      <th className="py-3 pr-3">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {passageiros.map((p) => (
                      <tr key={p.id} className="border-b border-gray-900">
                        <td className="py-3 pr-3">{p.nome}</td>
                        <td className="py-3 pr-3">{p.apelido}</td>
                        <td className="py-3 pr-3">{p.documento}</td>
                        <td className="py-3 pr-3">{p.email}</td>
                        <td className="py-3 pr-3">
                          <div className="flex gap-2">
                            <button
                              onClick={() => abrirEdicaoPassageiro(p)}
                              className="px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => apagarPassageiro(p.id)}
                              disabled={deletingId === p.id}
                              className="px-3 py-1.5 rounded-lg bg-red-500/15 border border-red-500/20 text-red-300 hover:bg-red-500/20 disabled:opacity-60"
                            >
                              {deletingId === p.id ? "A apagar..." : "Apagar"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {!loading && passageiros.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-6 text-center text-gray-500">
                          Nenhum passageiro encontrado.
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111318] p-4 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-bold">Taxistas</h2>
                <span className="text-xs text-gray-400">
                  {loading ? "..." : taxistas.length} registos
                </span>
              </div>

              <div className="overflow-auto">
                <table className="w-full min-w-[900px] text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-800">
                      <th className="py-3 pr-3">Nome</th>
                      <th className="py-3 pr-3">Apelido</th>
                      <th className="py-3 pr-3">Documento</th>
                      <th className="py-3 pr-3">Email</th>
                      <th className="py-3 pr-3">Moto</th>
                      <th className="py-3 pr-3">Matrícula</th>
                      <th className="py-3 pr-3">Disponível</th>
                      <th className="py-3 pr-3">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxistas.map((t) => (
                      <tr key={t.id} className="border-b border-gray-900">
                        <td className="py-3 pr-3">{t.nome}</td>
                        <td className="py-3 pr-3">{t.apelido}</td>
                        <td className="py-3 pr-3">{t.documento}</td>
                        <td className="py-3 pr-3">{t.email}</td>
                        <td className="py-3 pr-3">{t.moto?.nomeMoto || "-"}</td>
                        <td className="py-3 pr-3">{t.moto?.matricula || "-"}</td>
                        <td className="py-3 pr-3">
                          {t.disponivel ? "Sim" : "Não"}
                        </td>
                        <td className="py-3 pr-3">
                          <div className="flex gap-2">
                            <button
                              onClick={() => abrirEdicaoTaxista(t)}
                              className="px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => apagarTaxista(t.id)}
                              disabled={deletingId === t.id}
                              className="px-3 py-1.5 rounded-lg bg-red-500/15 border border-red-500/20 text-red-300 hover:bg-red-500/20 disabled:opacity-60"
                            >
                              {deletingId === t.id ? "A apagar..." : "Apagar"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {!loading && taxistas.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-6 text-center text-gray-500">
                          Nenhum taxista encontrado.
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>

        {editUser ? (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-2xl rounded-2xl border border-gray-800 bg-[#111318] p-5">
              <div className="flex items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-display text-lg font-bold">
                    Editar {editUser.tipo}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Atualize os dados e grave as alterações
                  </p>
                </div>

                <button
                  onClick={fecharEdicao}
                  className="px-3 py-2 rounded-lg border border-gray-700 bg-[#1a1f2e]"
                >
                  Fechar
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400">Nome</label>
                  <input
                    value={fNome}
                    onChange={(e) => setFNome(e.target.value)}
                    className="mt-1 w-full rounded-xl bg-[#0f1117] border border-gray-700 px-4 py-3 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400">Apelido</label>
                  <input
                    value={fApelido}
                    onChange={(e) => setFApelido(e.target.value)}
                    className="mt-1 w-full rounded-xl bg-[#0f1117] border border-gray-700 px-4 py-3 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400">Documento</label>
                  <input
                    value={fDocumento}
                    onChange={(e) => setFDocumento(e.target.value)}
                    className="mt-1 w-full rounded-xl bg-[#0f1117] border border-gray-700 px-4 py-3 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400">Email</label>
                  <input
                    value={fEmail}
                    onChange={(e) => setFEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl bg-[#0f1117] border border-gray-700 px-4 py-3 outline-none text-sm"
                  />
                </div>

                <div className={editUser.tipo === "taxista" ? "md:col-span-2" : ""}>
                  <label className="text-xs text-gray-400">
                    Nova senha (opcional)
                  </label>
                  <input
                    type="text"
                    value={fSenha}
                    onChange={(e) => setFSenha(e.target.value)}
                    placeholder="Deixe vazio para manter a atual"
                    className="mt-1 w-full rounded-xl bg-[#0f1117] border border-gray-700 px-4 py-3 outline-none text-sm"
                  />
                </div>

                {editUser.tipo === "taxista" ? (
                  <>
                    <div>
                      <label className="text-xs text-gray-400">Nome da moto</label>
                      <input
                        value={fNomeMoto}
                        onChange={(e) => setFNomeMoto(e.target.value)}
                        className="mt-1 w-full rounded-xl bg-[#0f1117] border border-gray-700 px-4 py-3 outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Matrícula</label>
                      <input
                        value={fMatricula}
                        onChange={(e) => setFMatricula(e.target.value)}
                        className="mt-1 w-full rounded-xl bg-[#0f1117] border border-gray-700 px-4 py-3 outline-none text-sm"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="inline-flex items-center gap-2 text-sm text-gray-300">
                        <input
                          type="checkbox"
                          checked={fDisponivel}
                          onChange={(e) => setFDisponivel(e.target.checked)}
                        />
                        Taxista disponível
                      </label>
                    </div>
                  </>
                ) : null}
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={guardarEdicao}
                  disabled={!canSave || saving}
                  className="px-5 py-3 rounded-xl bg-yellow-400 text-gray-900 font-semibold disabled:opacity-60"
                >
                  {saving ? "A guardar..." : "Guardar alterações"}
                </button>

                <button
                  onClick={fecharEdicao}
                  className="px-5 py-3 rounded-xl border border-gray-700 bg-[#1a1f2e]"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}