'use client'
import { useState } from "react"
import { Usuario } from "@/core"
import { GerarIds } from "@/utils"
import Container from "@/components/layout/container"
import HeaderPage from "@/components/templates/header-page"
import FormUsuario from "@/components/usuarios/form-usuario"
import ListaUsuarios from "@/components/usuarios/lista-usuarios"
import listaUsuarios from "@/data/constants/usuarios"

export default function UsuariosPage() {

   const [ usuarioAtual, setUsuarioAtual ] = useState<Partial<Usuario> | null>(null)
   const [ usuarios, setUsuarios ] = useState<Usuario[]>(listaUsuarios)

   function selecionarUsuario(usuario: Partial<Usuario>) {
      setUsuarioAtual(usuario)
   }

   function removerUsuario(usuarioRemovido: Usuario) {
      const novaListaUsuarios = usuarios.filter((u) => u.id !== usuarioRemovido.id)
      setUsuarios(novaListaUsuarios)
   }

   function salvarUsuario() {
      const usuarioExiste = usuarios.find((u) => u.id === usuarioAtual?.id)

      if(usuarioExiste) {
         const novosUsuarios = usuarios.map((u) => {
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
                     functionBtn={() => selecionarUsuario({ id: GerarIds.generateUniqueId() })}
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