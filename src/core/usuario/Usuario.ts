enum PerfilUsuario {
   ADMIN,
   COMPRADOR,
   OPERACIONAL,
}

enum StatusUsuario {
   ATIVO,
   BLOQUEADO,
   CANCELADO
}
export default interface Usuario {
   id: string
   nome: string
   email: string
   cpf: string
   imagemURL: string
   senha: string
   perfil: PerfilUsuario
   status: StatusUsuario
}
