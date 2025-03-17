/*
  Warnings:

  - Added the required column `cpf` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagemURL` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perfil` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_usuarios" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "imagemURL" TEXT NOT NULL,
    "perfil" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_usuarios" ("email", "id", "nome", "senha") SELECT "email", "id", "nome", "senha" FROM "usuarios";
DROP TABLE "usuarios";
ALTER TABLE "new_usuarios" RENAME TO "usuarios";
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
