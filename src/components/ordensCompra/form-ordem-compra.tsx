import { OrdemCompra } from "@/core"
import Container from "../layout/container"
import BtnsSaveCancel from "../templates/btns-save-cancel"

export interface FormOrdemCompraProps {
   ordemCompra: Partial<OrdemCompra>
   alteraOrdemCompra: (ordemCompra: Partial<OrdemCompra>) => void
   salvar: () => void
   cancelar: () => void
}

export default function FormOrdemCompra(props: FormOrdemCompraProps) {

   const { ordemCompra, alteraOrdemCompra, salvar, cancelar } = props

   return (
      <Container className="flex-col">
         <div className="flex flex-col justify-between md:flex-row gap-4 items-center mb-4">
            <h2 className="font-logo text-xl text-logo-black">INFORMAÇÕES ORDEM DE COMPRA</h2>
         </div>
         <div className="flex flex-1 gap-4 mb-6">
            <div className="flex flex-1 flex-col font-texto">
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>Id Produto:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Nome do produto"
                        onChange={(e) => alteraOrdemCompra({ ...ordemCompra, idProduto: e.target.value })}
                        value={ordemCompra.idProduto ?? ""}
                     />
                  </div>
                  <div className="flex flex-col">
                     <span>Código ordem de compra:</span>
                     <input
                        className="text-xl text-zinc-400 p-2 rounded-md border-2 outline-none read-only:bg-gray-100"
                        readOnly
                        value={ordemCompra.id ?? ""}
                     />
                  </div>
               </div>
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>Data:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="E-mail mais utilizado"
                        onChange={(e) => alteraOrdemCompra({ ...ordemCompra, data: e.target.value })}
                        value={ordemCompra.data ?? ""}
                     />
                  </div>
                  <div className="flex flex-1 flex-col">
                     <span>Entrega:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Apenas números"
                        onChange={(e) => alteraOrdemCompra({ ...ordemCompra, entrega: e.target.value })}
                        value={ordemCompra.entrega ?? ""}
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-1 justify-end">
            <BtnsSaveCancel salvar={salvar} cancelar={cancelar} />
         </div>
      </Container>
   )
} 