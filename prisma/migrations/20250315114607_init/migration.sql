/*
  Warnings:

  - The primary key for the `ordemcompra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `ordemcompra` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `produtoId` on the `ordemcompra` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `usuarioId` on the `ordemcompra` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ordemcompra" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "data" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "prazo" INTEGER NOT NULL,
    "qtdeCaixasPallet" INTEGER NOT NULL,
    "qtdePallets" INTEGER NOT NULL,
    "entrega" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "produtoId" BIGINT NOT NULL,
    "usuarioId" BIGINT NOT NULL,
    CONSTRAINT "ordemcompra_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ordemcompra_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ordemcompra" ("data", "entrega", "id", "observacoes", "prazo", "preco", "produtoId", "qtdeCaixasPallet", "qtdePallets", "status", "usuarioId") SELECT "data", "entrega", "id", "observacoes", "prazo", "preco", "produtoId", "qtdeCaixasPallet", "qtdePallets", "status", "usuarioId" FROM "ordemcompra";
DROP TABLE "ordemcompra";
ALTER TABLE "new_ordemcompra" RENAME TO "ordemcompra";
CREATE UNIQUE INDEX "ordemcompra_produtoId_key" ON "ordemcompra"("produtoId");
CREATE UNIQUE INDEX "ordemcompra_usuarioId_key" ON "ordemcompra"("usuarioId");
CREATE TABLE "new_produtos" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "marca" TEXT,
    "peso" TEXT,
    "imagemURL" TEXT,
    "especificacoes" TEXT
);
INSERT INTO "new_produtos" ("especificacoes", "id", "imagemURL", "marca", "nome", "peso") SELECT "especificacoes", "id", "imagemURL", "marca", "nome", "peso" FROM "produtos";
DROP TABLE "produtos";
ALTER TABLE "new_produtos" RENAME TO "produtos";
CREATE UNIQUE INDEX "produtos_nome_key" ON "produtos"("nome");
CREATE TABLE "new_usuarios" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_usuarios" ("email", "id", "nome") SELECT "email", "id", "nome" FROM "usuarios";
DROP TABLE "usuarios";
ALTER TABLE "new_usuarios" RENAME TO "usuarios";
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
