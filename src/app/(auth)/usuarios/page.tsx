'use client'
import Container from "@/components/layout/container"
import HeaderPage from "@/components/templates/header-page"
import ListaUsuarios from "@/components/usuarios/lista-usuarios"

export default function UsuariosPage() {

   return (
      <Container className="flex-col">
         <HeaderPage
            titulo="USUÁRIOS CADASTRADOS"
            linkBtn="/usuarios/addUsuario"
            textoBtn="Adicionar Usuário"
            placeholder="Buscar usuário"
         />
         <ListaUsuarios />
      </Container>
   )
}