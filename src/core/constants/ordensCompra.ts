import { OrdemCompra } from "../ordemCompra"

const ordensCompra: OrdemCompra[] = [
   {
      id: "20250116111517067",
      data: "16/01/2025",
      precoPromocional: 15.50,
      prazo: 28,
      qtdePallets: 18,
      qtdeCaixasPallet: 36,
      entrega: "Centralizada",
      observacao: "Faltam 10 pallets para fechar a carga",
      status: 'Ativa',
      idProduto: "Creme dental Oral B 123 70gr"
   },
   {
      id: "20250209111517123",
      data: "09/02/2025",
      precoPromocional: 15.50,
      prazo: 28,
      qtdePallets: 18,
      qtdeCaixasPallet: 36,
      entrega: "Centralizada",
      observacao: "Faltam 10 pallets para fechar a carga",
      status: 'Ativa',
      idProduto: "SABÃO OMO LÍQUIDO 3lts"
   },
   {
      id: "20250226141517145",
      data: "26/02/2025",
      precoPromocional: 18.50,
      prazo: 28,
      qtdePallets: 20,
      qtdeCaixasPallet: 30,
      entrega: "Centralizada",
      observacao: "",
      status: 'Ativa',
      idProduto: "CAFÉ PILÃO 500gr"
   }
]

export default ordensCompra