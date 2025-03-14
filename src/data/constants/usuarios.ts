import { Usuario } from "@/core/usuario"

const usuarios: Usuario[] = [
   {
      id: 240101134595001,
      nome: "Bianca",
      email: "bianca@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "bianca@01",
      perfil: "Admin",
      status: "Ativo"
   },
   {
      id: 240227154395002,
      nome: "Leonardo",
      email: "leonardo@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "leonardo@01",
      perfil: "Admin",
      status: "Ativo"
   },
   {
      id: 240227134395121,
      nome: "Isaac Silva",
      email: "isaac@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "isaac@01",
      perfil: "Comprador",
      status: "Ativo"
   },
   {
      id: 240613112567343,
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