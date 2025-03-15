import { GerarIds } from '@/utils'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
   const produto = await prisma.produtos.create({
      data: {
         id: GerarIds.generateUniqueId(),
         nome: "Arroz Tio João 5Kg",
         marca: "Tio João",
         peso: "5Kg",
         imagemURL: "/images/produtos/arroz-tio-joao-5kg.jpg"
      },
   });

   console.log("Produto criado:", produto);
}

main()
   .catch((e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
