'use client'
import Container from "@/components/layout/container"
import HeaderPage from "@/components/templates/header-page"
import FormUsuario from "@/components/usuarios/form-usuario"
import ListaUsuarios from "@/components/usuarios/lista-usuarios"
import { GerarIds, Usuario } from "@/core"
import listaUsuarios from "@/core/constants/usuarios"
import { useState } from "react"

export default function UsuariosPage() {

   //const { usuarios } = useUsuarios()
   const [usuarioAtual, setUsuarioAtual ] = useState<Partial<Usuario> | null>(null)
   const [usuarios, setUsuarios] = useState<Usuario[]>(listaUsuarios)

   function selecionarUsuario(usuario: Partial<Usuario>) {
      console.log("selecionarUsuario")
      setUsuarioAtual(usuario)
   }

   function removerUsuario(usuarioRemovido: Usuario) {
      console.log("removerUsuario")
      const novaListaUsuarios = usuarios.filter((u) => u.id !== usuarioRemovido.id)
      setUsuarios(novaListaUsuarios)
   }

   function salvarUsuario() {
      const usuarioExiste = usuarios.find((u) => u.id === usuarioAtual?.id)

      if(usuarioExiste) {
         const novosUsuarios = usuarios.map((u) => {
            console.log(u.imagemURL);
            return u.id === usuarioAtual?.id ? usuarioAtual : u
         })
         setUsuarios(novosUsuarios as Usuario[])
      }else {
         setUsuarios([...usuarios, usuarioAtual as Usuario])
      }
      setUsuarioAtual(null)
   }

   function cancelar() {
      setUsuarioAtual(null)
   }

   return (
      <Container className="flex-col">
         <div>
            { usuarioAtual ? (
               <FormUsuario 
                  usuario={usuarioAtual} 
                  alteraUsuario={selecionarUsuario}
                  salvar={salvarUsuario}
                  cancelar={cancelar}
               />
            ) : (
               <>
                  <HeaderPage
                     titulo="USUÁRIOS CADASTRADOS"
                     textoBtn="Adicionar Usuário"
                     placeholder="Buscar usuário"
                     functionBtn={() => selecionarUsuario({ id: GerarIds.newId() })}
                  />
                  <ListaUsuarios 
                     usuarios={usuarios} 
                     selecionarUsuario={selecionarUsuario}
                     removerUsuario={removerUsuario} 
                  />
               </>
            )}
         </div>
      </Container>
   )
}