export default interface OrdemCompra {
   id: bigint
   data: string
   precoPromocional: number
   prazo: number
   qtdePallets: number
   qtdeCaixasPallet: number
   entrega: string
   observacao?: string
   status: string
   idProduto: bigint
   idUsuario: bigint
}