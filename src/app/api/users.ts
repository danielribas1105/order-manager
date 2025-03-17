import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/app/libs/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'GET') {
      try {
         const listaUsuarios = await prisma.usuarios.findMany();
         return res.status(200).json(listaUsuarios);
      } catch (error) {
         return res.status(500).json({ error: "Erro ao buscar usuários" });
      }
   }

   res.setHeader('Allow', ['GET']);
   res.status(405).end(`Method ${req.method} Not Allowed`);
}
/* export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'GET') {
      const usuarios = await prisma.usuarios.findMany();
      return res.status(200).json(usuarios);
   }

   if (req.method === 'POST') {
      const { id, email, nome, cpf, senha, imagemURL, perfil, status } = req.body;
      try {
         const usuarios = await prisma.usuarios.create({
            data: { id, email, nome, cpf, senha, imagemURL, perfil, status },
         });
         return res.status(201).json(usuarios);
      } catch (error) {
         return res.status(400).json({ error: "Erro ao criar usuário" });
      }
   }

   res.setHeader('Allow', ['GET', 'POST']);
   res.status(405).end(`Method ${req.method} Not Allowed`);
}
 */

