import Link from "next/link"
import { OrdemCompra } from "@/core"
import { ordensCompra } from "@/core"

export interface CardOrdemCompraProps {
   ordemCompra: OrdemCompra
}

export default function CardOrdemCompra(props: CardOrdemCompraProps) {
   const { ordemCompra } = props
   const qtdeOrdensCompra = ordensCompra.length;
   return (
      <Link href={`/ordensCompra/${props.ordemCompra.id}`} className="w-64 h-72 bg-zinc-100 border-2 rounded-3xl p-2 text-zinc-800 hover:shadow-xl hover:shadow-logo-black/30">
         <div className="h-14 my-2 text-xl text-center border-t">
            {ordemCompra.id}
         </div>
         <div className="flex flex-col gap-1 mb-3">
            <div className="flex gap-2">
               <span>Data:</span>
               <span>{ordemCompra.data}</span>
            </div>
            <div className="flex gap-2">
               <span>idProduto:</span>
               <span>{ordemCompra.idProduto}</span>
            </div>
            <div className="flex gap-2">
               <span>Status:</span>
               <span>{ordemCompra.status === 'Ativa' ? 'Ativa' : 'Outro'}</span>
            </div>
         </div>
      </Link>
   )
}