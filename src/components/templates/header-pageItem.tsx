import { IconCornerUpLeft, IconLibraryPlus } from "@tabler/icons-react"
import BotaoLink from "./btn-link"

export interface HeaderPageItemProps {
   titulo: string
   linkBack: string
}

export default function HeaderPageItem(props: HeaderPageItemProps) {
   return (
      <div className="flex flex-col justify-between md:flex-row gap-4 items-center mb-4">
         <h2 className="font-logo text-xl text-logo-black">{props.titulo}</h2>
         <div className="flex justify-center items-center gap-4">
            <button className="flex justify-center items-center gap-2 px-4 py-1 border-2 rounded-md text-logo-black hover:text-logo-white hover:bg-logo-orange"
               onClick={(e) => {
                  /* e.preventDefault() */
                  console.log('Ordem de compra')
                  /* adicionarItem(props.produto) */
               }}>
               <IconLibraryPlus size={24} />
               <span className="font-logo">Ordem de Compra</span>
            </button>
            <BotaoLink link={props.linkBack} texto={"Voltar"} icon={IconCornerUpLeft}/>
         </div>
      </div>
   )
}