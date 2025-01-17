export default interface Supermercado {
   id: string
   nome: string
   cnpj: string
   status: 'Ativo' | 'Bloqueado' | 'Cancelado'
   idComprador: string
}