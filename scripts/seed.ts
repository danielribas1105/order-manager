import { GerarIds } from '@/utils'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
   const usuario = await prisma.usuarios.create({
      data: {
         id: GerarIds.newId(),
         nome: "Bianca",
         email: "bianca@gmail.com",
         cpf: "374.187.845-01",
         senha: "bianca@01",
         imagemURL: "",
         perfil: "Admin",
         status: "Ativo"
      },
   });

   console.log("Produto criado:", usuario);
}

main()
   .catch((e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
