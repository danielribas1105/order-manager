'use client'
import FormUsuario from "@/components/usuarios/form-usuario"
import { usuarios } from "@/core"

export default function InfoUsuario(props: any) {
   const id = props.params.usuariosId
   const usuario = usuarios.find((usuario) => usuario.id === id)
   return usuario ? (
      <FormUsuario usuario={usuario}/>
   ) : (
      <div>Usuário não cadastrado</div>
   )
}