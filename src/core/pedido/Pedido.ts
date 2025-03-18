export default interface Pedido {
   id: bigint
   idOrdemCompra: bigint
   idComprador: bigint
   idSupermercado: bigint
   data: string
   qtdeCaixas: number
}