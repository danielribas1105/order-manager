export default interface OrdemCompra {
   id: number
   data: string
   precoPromocional: number
   prazo: number
   qtdePallets: number
   qtdeCaixasPallet: number
   entrega: string
   observacao?: string
   status: string
   idProduto: number
   idUsuario: number
}