import Image from "next/image"
import { Usuario } from "@/core"
import Container from "../layout/container"
import HeaderPageItem from "../templates/header-pageItem"
import BtnsSaveCancel from "../templates/btns-save-cancel"

export interface FormUsuarioProps {
   usuario: Usuario
}

export default function FormUsuario(props: FormUsuarioProps) {
   return (
      <Container className="flex-col">
         <HeaderPageItem titulo={"INFORMAÇÕES DO USUÁRIO"} linkBack={"/usuarios"} />
         <div className="flex flex-1 gap-4 mb-6">
            <div className="w-60 h-60 relative bg-white border-2">
               <Image
                  src={props.usuario.imagemURL}
                  fill
                  className="object-contain"
                  alt={`Foto de perfil ${props.usuario.nome}`}
               />
            </div>
            <div className="flex flex-1 flex-col font-texto">
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>Nome:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Nome do produto"
                        value={props.usuario.nome}
                     />
                  </div>
                  <div className="flex flex-col">
                     <span>Código do usuário:</span>
                     <input
                        className="text-xl text-zinc-400 p-2 rounded-md border-2 outline-none read-only:bg-gray-100"
                        readOnly
                        value={props.usuario.id}
                     />
                  </div>
               </div>
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>E-mail:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="E-mail mais utilizado"
                        value={props.usuario.email}
                     />
                  </div>
                  <div className="flex flex-1 flex-col">
                     <span>CPF:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Marca do produto"
                        value={props.usuario.cpf}
                     />
                  </div>
               </div>
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>Perfil:</span>
                     <select className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        defaultValue={props.usuario.perfil}>
                        <option value="" disabled hidden>Selecione uma opção</option>
                        <option value="Admin">Admin</option>
                        <option value="Comprador">Comprador</option>
                        <option value="Operacional">Operacional</option>
                     </select>
                  </div>
                  <div className="flex flex-1 flex-col">
                     <span>Status:</span>
                     <select className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        defaultValue={props.usuario.status}>
                        <option value="" disabled hidden>Selecione uma opção</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Bloqueado">Bloqueado</option>
                        <option value="Cancelado">Cancelado</option>
                     </select>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-1 justify-end">
            <BtnsSaveCancel />
         </div>
      </Container>
   )
}