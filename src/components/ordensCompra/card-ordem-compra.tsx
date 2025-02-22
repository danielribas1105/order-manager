'use client'
import { OrdemCompra } from "@/core"
import { IconEdit, IconTrash } from "@tabler/icons-react"

export interface CardOrdemCompraProps {
   ordemCompra: OrdemCompra
   selecionarOrdemCompra: (ordemCompra: OrdemCompra) => void
   removerOrdemCompra: (ordemCompra: OrdemCompra) => void
}

export default function CardOrdemCompra(props: CardOrdemCompraProps) {
   const { ordemCompra } = props
   return (
      <div className="flex flex-col justify-between w-64 h-72 bg-zinc-100 border-2 rounded-3xl p-2 text-zinc-800 hover:shadow-xl hover:shadow-logo-black/30">
         <div>
            <div className="flex gap-2 justify-center my-2 text-xl">
               <span className="font-semibold">OC:</span>
               <span>{ordemCompra.id}</span>
            </div>
            <div className="font-semibold text-lg text-center text-blue-800">
               {ordemCompra.idProduto}
            </div>
         </div>
         <div className="flex flex-col gap-1 mb-3">
            <div className="flex gap-2">
               <span>Preço:</span>
               <span>R$ {ordemCompra.precoPromocional}</span>
            </div>
            <div className="flex gap-2">
               <span>Data:</span>
               <span>{ordemCompra.data}</span>
            </div>
            <div className="flex gap-2">
               <span>Status:</span>
               <span>{ordemCompra.status === 'Ativa' ? 'Ativa' : 'Outro'}</span>
            </div>
         </div>
         <div className="flex justify-center mb-1">
            <div className="flex gap-2 items-center">
               <button
                  className="flex justify-center items-center gap-1 px-2 py-1 font-logo text-lg text-logo-white bg-blue-400 hover:bg-blue-600 border-2 rounded-md"
                  onClick={(e) => {
                     e.preventDefault()
                     props.selecionarOrdemCompra(ordemCompra)
                  }}>
                  <IconEdit size={20} />
                  <span>Editar</span>
               </button>
               <button
                  className="flex justify-center items-center gap-1 px-2 py-1 font-logo text-lg text-logo-white bg-red-400 hover:bg-red-600 border-2 rounded-md"
                  onClick={(e) => {
                     e.preventDefault()
                     props.removerOrdemCompra(ordemCompra)
                  }}>
                  <IconTrash size={20} />
                  <span>Excluir</span>
               </button>
            </div>
         </div>
      </div>
   )
}