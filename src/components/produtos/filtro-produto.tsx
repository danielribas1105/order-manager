'use client'
import { IconSearch } from '@tabler/icons-react'

export interface FiltroProdutoProps {
   className?: string
   placeholder: string
}

export default function FiltroProduto(props: FiltroProdutoProps) {
   //const { pesquisa, setPesquisa } = useProdutos()
   return (
      <div className={`flex flex-1 gap-2 text-zinc-200 border-2 rounded-full overflow-hidden ${props.className ?? ''}`}>
         <input
            value={''} /* pesquisa ?? '' */
            /* onChange={(e) => setPesquisa(e.target.value)} */
            placeholder={props.placeholder}
            className="flex-1 bg-transparent outline-none px-4 py-1"
         />
         <div className="flex justify-center items-center px-4">
            <IconSearch size={24} stroke={3.0} className="text-logo-orange" />
         </div>
      </div>
   )
}
