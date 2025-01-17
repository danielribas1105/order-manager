'use client'
import Image from "next/image"
import { GerarIds } from "@/core"
import Container from "@/components/layout/container"
import semImagem from "@/../public/images/img-user.png"
import HeaderPageItem from "@/components/templates/header-pageItem"
import BtnsSaveCancel from "@/components/templates/btns-save-cancel"
import useUsuarios from "@/data/hooks/useUsuarios"

export default function AddUsuario() {

   const usuarios = useUsuarios()
   
   return (
      <Container className="flex-col">
         <HeaderPageItem titulo={"CADASTRAR NOVO USUÁRIO"} linkBack={"/usuarios"} />
         <div className="flex flex-1 gap-4 mb-6">
            <div className="w-60 h-60 relative bg-white border-2">
               <Image
                  src={semImagem}
                  fill
                  className="object-contain"
                  alt="Foto de perfil"
               />
            </div>
            <div className="flex flex-1 flex-col font-texto">
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>Nome:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Nome do usuário"
                        value={''}
                     />
                  </div>
                  <div className="flex flex-col">
                     <span>Código do usuário:</span>
                     <input
                        className="text-xl text-zinc-400 p-2 rounded-md border-2 outline-none read-only:bg-gray-100"
                        readOnly
                        value={GerarIds.gerarIdUnico()}
                     />
                  </div>
               </div>
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>E-mail:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="E-mail mais utilizado"
                        value={''}
                     />
                  </div>
                  <div className="flex flex-1 flex-col">
                     <span>CPF:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Somente números"
                        value={''}
                     />
                  </div>
               </div>
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>Perfil:</span>
                     <select className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        defaultValue="">
                        <option value="" disabled hidden>Selecione uma opção</option>
                        <option value="Admin">Admin</option>
                        <option value="Comprador">Comprador</option>
                        <option value="Operacional">Operacional</option>
                     </select>
                  </div>
                  <div className="flex flex-1 flex-col">
                     <span>Status:</span>
                     <select className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        defaultValue="">
                        <option value="" disabled hidden>Selecione uma opção</option>
                        <option value="Ativo">Ativo</option>
                        <option value="Bloqueado">Bloqueado</option>
                        <option value="Cancelado">Cancelado</option>
                     </select>
                  </div>
               </div>
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>Senha:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Digitar senha"
                        value={''}
                     />
                  </div>
                  <div className="flex flex-1 flex-col">
                     <span>Confirmar Senha:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Confirmar senha"
                        value={''}
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="flex justify-end">
            <BtnsSaveCancel />
         </div>
      </Container>
   )
}