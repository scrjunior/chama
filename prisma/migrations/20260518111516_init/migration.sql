-- CreateEnum
CREATE TYPE "viagem_status" AS ENUM ('PENDENTE', 'ACEITA', 'REJEITADA', 'CONCLUIDA', 'CANCELADA');

-- CreateTable
CREATE TABLE "moto" (
    "id" TEXT NOT NULL,
    "nomeMoto" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "taxistaId" TEXT NOT NULL,

    CONSTRAINT "moto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passageiro" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "passageiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "taxista" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disponivel" BOOLEAN NOT NULL DEFAULT false,
    "accuracy" DOUBLE PRECISION,
    "lastGpsAt" TIMESTAMP(3),
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,

    CONSTRAINT "taxista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viagem" (
    "id" TEXT NOT NULL,
    "status" "viagem_status" NOT NULL DEFAULT 'PENDENTE',
    "origemTexto" TEXT NOT NULL,
    "destinoTexto" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "passageiroId" TEXT NOT NULL,
    "taxistaId" TEXT NOT NULL,

    CONSTRAINT "viagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "moto_matricula_key" ON "moto"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "moto_taxistaId_key" ON "moto"("taxistaId");

-- CreateIndex
CREATE UNIQUE INDEX "passageiro_documento_key" ON "passageiro"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "passageiro_email_key" ON "passageiro"("email");

-- CreateIndex
CREATE UNIQUE INDEX "taxista_documento_key" ON "taxista"("documento");

-- CreateIndex
CREATE UNIQUE INDEX "taxista_email_key" ON "taxista"("email");

-- CreateIndex
CREATE INDEX "viagem_passageiroId_idx" ON "viagem"("passageiroId");

-- CreateIndex
CREATE INDEX "viagem_status_idx" ON "viagem"("status");

-- CreateIndex
CREATE INDEX "viagem_taxistaId_idx" ON "viagem"("taxistaId");

-- AddForeignKey
ALTER TABLE "moto" ADD CONSTRAINT "moto_taxistaId_fkey" FOREIGN KEY ("taxistaId") REFERENCES "taxista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem" ADD CONSTRAINT "viagem_passageiroId_fkey" FOREIGN KEY ("passageiroId") REFERENCES "passageiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagem" ADD CONSTRAINT "viagem_taxistaId_fkey" FOREIGN KEY ("taxistaId") REFERENCES "taxista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
