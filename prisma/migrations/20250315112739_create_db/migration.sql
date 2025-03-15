-- CreateTable
CREATE TABLE "produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "marca" TEXT,
    "peso" TEXT,
    "imagemURL" TEXT,
    "especificacoes" TEXT
);

-- CreateTable
CREATE TABLE "ordemcompra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "prazo" INTEGER NOT NULL,
    "qtdeCaixasPallet" INTEGER NOT NULL,
    "qtdePallets" INTEGER NOT NULL,
    "entrega" TEXT NOT NULL,
    "observacoes" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "ordemcompra_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ordemcompra_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "produtos_nome_key" ON "produtos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "ordemcompra_produtoId_key" ON "ordemcompra"("produtoId");

-- CreateIndex
CREATE UNIQUE INDEX "ordemcompra_usuarioId_key" ON "ordemcompra"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
