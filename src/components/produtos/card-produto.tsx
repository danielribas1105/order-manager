import Link from "next/link"
import Image from "next/image"
import { Produto } from "@/core"

export interface CardProdutoProps {
   produto: Produto
}

export default function CardProduto(props: CardProdutoProps) {
   const { produto } = props;
   return (
      <Link href={`/produtos/${props.produto.id}`} className="w-64 h-72 bg-zinc-100 border-2 rounded-3xl p-2 text-zinc-800 hover:shadow-xl hover:shadow-logo-black/30">
         <div className="w-full h-24 relative bg-white">
            <Image
               src={produto.imagemURL}
               fill
               className="object-contain"
               alt="Foto do produto"
            />
         </div>
         <div className="h-14 my-2 text-xl text-center border-t">
            {produto.nomeProduto}
         </div>
         <div className="flex flex-col gap-1 mb-3">
            <div className="flex gap-2">
               <span>Marca:</span>
               <span>{produto.marca}</span>
            </div>
            <div className="flex gap-2">
               <span>Peso:</span>
               <span>{produto.peso}</span>
            </div>
         </div>
      </Link>
   )
}