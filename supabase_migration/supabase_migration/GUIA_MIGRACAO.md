# Guia de Migração: MariaDB → Supabase (PostgreSQL)

## Ficheiros alterados neste pacote

| Ficheiro | Destino no projeto |
|---|---|
| `schema.prisma` | `prisma/schema.prisma` |
| `prisma.ts` | `src/lib/prisma.ts` |
| `.env.local` | `.env.local` (e variáveis no Vercel) |

---

## Passo 1 — Criar projeto no Supabase

1. Aceda a https://supabase.com e crie uma conta (gratuita)
2. Clique em **New Project**, escolha um nome e região próxima de Moçambique (ex: `eu-west-1`)
3. Guarde bem a **Database Password** que definir

---

## Passo 2 — Copiar as URLs de ligação

No painel do Supabase:
- Vá a **Project Settings → Database → Connection string**
- Copie a URL no modo **Transaction** (porta 6543) → cole em `DATABASE_URL`
- Copie a URL no modo **Session** (porta 5432) → cole em `DIRECT_URL`

Substitua `[PASSWORD]` pela sua password real em ambas as URLs.

---

## Passo 3 — Copiar os ficheiros

```bash
# Na raiz do seu projeto
cp schema.prisma prisma/schema.prisma
cp prisma.ts src/lib/prisma.ts
cp .env.local .env.local   # edite com as suas URLs reais
```

---

## Passo 4 — Atualizar dependências

```bash
# Remover adaptador MariaDB (já não é necessário)
npm uninstall @prisma/adapter-mariadb

# O @prisma/client e prisma já estão instalados, só reinstale
npm install
```

---

## Passo 5 — Apagar migrations antigas e criar novas

As migrations antigas são SQL do MySQL e não servem para PostgreSQL.

```bash
# Apagar pasta de migrations antiga
rm -rf prisma/migrations

# Gerar o cliente Prisma novo
npx prisma generate

# Criar migration inicial para PostgreSQL
npx prisma migrate dev --name init
```

---

## Passo 6 — Atualizar variáveis no Vercel

No painel do Vercel:
- **Settings → Environment Variables**
- **Remover** as antigas: `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_NAME`, `DATABASE_URL`
- **Adicionar** as novas:
  - `DATABASE_URL` → URL Transaction (porta 6543)
  - `DIRECT_URL` → URL Session (porta 5432)

As variáveis VAPID mantêm-se iguais.

---

## Passo 7 — Deploy

```bash
git add .
git commit -m "chore: migrar base de dados para Supabase (PostgreSQL)"
git push
```

O Vercel vai fazer deploy automaticamente. ✅

---

## Diferenças que NÃO precisam de alteração no código

- Todos os ficheiros em `src/app/api/` ficam **iguais** — o Prisma Client abstrai tudo
- O schema dos modelos (passageiro, taxista, viagem, moto) é **idêntico**
- As queries Prisma são **100% compatíveis**

---

## Verificação pós-migração

No painel do Supabase, vá a **Table Editor** — deve ver as tabelas criadas:
- `moto`
- `passageiro`
- `taxista`
- `viagem`
