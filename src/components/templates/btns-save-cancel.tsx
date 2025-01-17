import { IconCheck, IconX } from "@tabler/icons-react"

export default function BtnsSaveCancel() {
   return (
      <div className="flex gap-2 items-center">
         <button
            className="flex justify-center items-center gap-2 px-4 py-2 font-logo text-xl text-logo-white bg-emerald-400 hover:bg-emerald-600 border-2 rounded-md"
            onClick={(e) => {
               /* e.preventDefault() */
               console.log('Salvar ordem compra')
               /* adicionarItem(props.produto) */
            }}>
            <IconCheck size={24} />
            <span>Salvar</span>
         </button>
         <button
            className="flex justify-center items-center gap-2 px-4 py-2 font-logo text-xl text-logo-white bg-red-400 hover:bg-red-600 border-2 rounded-md"
            onClick={(e) => {
               /* e.preventDefault() */
               console.log('Salvar ordem compra')
               /* adicionarItem(props.produto) */
            }}>
            <IconX size={24} />
            <span>Cancelar</span>
         </button>
      </div>
   )
}