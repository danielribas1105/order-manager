import { OrdemCompra } from "@/core/ordemCompra"

const ordensCompra: OrdemCompra[] = [
   {
      id: 250116111517067,
      data: "16/01/2025",
      precoPromocional: 15.50,
      prazo: 28,
      qtdePallets: 18,
      qtdeCaixasPallet: 36,
      entrega: "Centralizada",
      observacao: "Faltam 10 pallets para fechar a carga",
      status: 'Ativa',
      idProduto: 241209111517456
   },
   {
      id: 250209111517123,
      data: "09/02/2025",
      precoPromocional: 15.50,
      prazo: 28,
      qtdePallets: 18,
      qtdeCaixasPallet: 36,
      entrega: "Centralizada",
      observacao: "Faltam 10 pallets para fechar a carga",
      status: 'Ativa',
      idProduto: 241211091537425
   },
   {
      id: 250226141517145,
      data: "26/02/2025",
      precoPromocional: 18.50,
      prazo: 28,
      qtdePallets: 20,
      qtdeCaixasPallet: 30,
      entrega: "Centralizada",
      observacao: "",
      status: 'Ativa',
      idProduto: 241212141537240
   }
]

export default ordensCompra