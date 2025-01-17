'use client'
import { Produto } from "@/core"
import useProdutos from "@/data/hooks/useProdutos"
import CardProduto from "./card-produto"

export default function ListaProdutos() {

   const { produtos } = useProdutos()

   return (
      <div className="flex flex-wrap justify-center gap-4">
         {produtos.map((produto: Produto) => (
            <CardProduto key={produto.id} produto={produto} />
         ))}
      </div>
   )
}