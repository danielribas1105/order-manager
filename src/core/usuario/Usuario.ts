export default interface Usuario {
   id: string
   nome: string
   email: string
   cpf: string
   imagemURL: string
   senha: string
   perfil: 'Admin' | 'Comprador' | 'Operacional'
   status: 'Ativo' | 'Bloqueado' | 'Cancelado'
}