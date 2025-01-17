import { v4 as uuidv4} from "uuid"
import { Usuario } from "../usuario"

const usuarios: Usuario[] = [
   {
      id: uuidv4(),
      nome: "Bianca",
      email: "bianca@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "bianca@01",
      perfil: "Admin",
      status: "Ativo"
   },
   {
      id: uuidv4(),
      nome: "Leonardo",
      email: "leonardo@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "leonardo@01",
      perfil: "Admin",
      status: "Ativo"
   },
   {
      id: uuidv4(),
      nome: "Isaac Silva",
      email: "isaac@gmail.com",
      cpf: "123456789-00",
      imagemURL: "/images/img-user.png",
      senha: "isaac@01",
      perfil: "Comprador",
      status: "Ativo"
   },
   {
      id: uuidv4(),
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