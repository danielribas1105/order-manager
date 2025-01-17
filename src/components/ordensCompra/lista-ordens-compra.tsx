'use client'
import { OrdemCompra } from "@/core"
import useOrdensCompra from "@/data/hooks/useOrdensCompra"
import CardOrdemCompra from "./card-ordem-compra"

export default function ListaOrdensCompra() {

   const { ordensCompra } = useOrdensCompra()

   return (
      <div className="flex flex-wrap justify-center gap-4">
         {ordensCompra.map((ordemCompra: OrdemCompra) => (
            <CardOrdemCompra key={ordemCompra.id} ordemCompra={ordemCompra} />
         ))}
      </div>
   )
}