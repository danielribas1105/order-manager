export default interface Usuario {
   id: bigint
   nome: string
   email: string
   cpf: string
   imagemURL?: string
   senha?: string
   perfil: string
   status: string
}