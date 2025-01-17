import { IconCornerUpLeft, IconPlus } from "@tabler/icons-react"
import FiltroProduto from "../produtos/filtro-produto"
import BotaoLink from "./btn-link"

export interface HeaderPageProps {
   titulo: string
   linkBtn: string
   textoBtn: string
   placeholder: string
}

export default function HeaderPage(props: HeaderPageProps) {
   return (
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-4">
         <h2 className="font-logo text-xl text-logo-black">{props.titulo}</h2>
         <FiltroProduto placeholder={props.placeholder} />
         <div className="flex gap-2">
            <BotaoLink link={props.linkBtn} texto={props.textoBtn} icon={IconPlus}/>
            <BotaoLink link={"/home"} texto={"Voltar"} icon={IconCornerUpLeft}/>
         </div>
      </div>
   )
}