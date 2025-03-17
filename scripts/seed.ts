import { GerarIds } from '@/utils'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
   const usuario = await prisma.usuarios.create({
      data: {
         id: GerarIds.generateUniqueId(),
         nome: "Daniel Ribas",
         email: "daniel@gmail.com",
         cpf: "123.456.789-00",
         senha: "daniel@01",
         imagemURL: "/images/usuarios/daniel-ribas.jpg",
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
