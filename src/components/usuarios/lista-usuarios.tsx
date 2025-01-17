'use client'
import { Usuario } from "@/core"
import listaUsuarios from "@/core/constants/usuarios"
import { useState } from "react"
import CardUsuario from "./card-usuario"

export default function ListaUsuarios() {

   //const { usuarios } = useUsuarios()
   const [usuarios, setUsuarios] = useState<Usuario[]>(listaUsuarios)

   function removerUsuario(usuarioRemovido: Usuario) {
      console.log("funcao remover usuario")
      const novaListaUsuarios = usuarios.filter((u) => u.id !== usuarioRemovido.id)
      setUsuarios(novaListaUsuarios)
   }

   return (
      <div className="flex flex-wrap justify-center gap-4">
         {usuarios.map((usuario: Usuario) => (
            <CardUsuario
               key={usuario.id}
               usuario={usuario}
               removerUsuario={() => removerUsuario(usuario)}
            />
         ))}
      </div>
   )
}