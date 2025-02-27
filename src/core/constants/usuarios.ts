import { Usuario } from "../usuario"
import { GerarIds } from "../utils"

const usuarios: Usuario[] = [
   {
      id: '6d9793d6-ab4b-49ce-987c-75352089fb57',
      nome: "Bianca",
      email: "bianca@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "bianca@01",
      perfil: "Admin",
      status: "Ativo"
   },
   {
      id: 'ccb5e71b-a66b-4c79-87dc-71879dc06c64',
      nome: "Leonardo",
      email: "leonardo@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "leonardo@01",
      perfil: "Admin",
      status: "Ativo"
   },
   {
      id: 'cd002167-f5f9-4250-9d2d-562d72a7c42a',
      nome: "Isaac Silva",
      email: "isaac@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "isaac@01",
      perfil: "Comprador",
      status: "Ativo"
   },
   {
      id: '96d2df84-3d7d-468a-9f16-eea44de62129',
      nome: "Adenilson Lopes Marcolino",
      email: "adenilson@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "adenilson@01",
      perfil: "Comprador",
      status: "Bloqueado"
   }
]

export default usuarios