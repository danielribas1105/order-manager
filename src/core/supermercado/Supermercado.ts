export default interface Supermercado {
   id: string
   razaoSocial: string
   cnpj: string
   status: 'Ativo' | 'Bloqueado' | 'Cancelado'
   idComprador: string
}