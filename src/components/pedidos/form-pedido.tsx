import Container from "@/components/layout/container"
import FiltroProduto from "@/components/produtos/filtro-produto"
import BtnsSaveCancel from "@/components/templates/btns-save-cancel"
import { GerarDatas, Pedido } from "@/core"
import { IconPlus } from "@tabler/icons-react"

export interface FormPedidoProps {
    pedido: Partial<Pedido>
    titleForm: string
    alteraPedido: (pedido: Partial<Pedido>) => void
    salvar: () => void
    cancelar: () => void
}

export default function FormPedido(props: FormPedidoProps) {

    const { pedido, titleForm, alteraPedido, salvar, cancelar } = props

    return (
        <Container className="flex-col">
           <div className="flex flex-col justify-between md:flex-row gap-4 items-center mb-4">
              <h2 className="title-page-default">{titleForm}</h2>
              <FiltroProduto placeholder={'Buscar produto'} />
              <button
                 className="flex justify-center items-center gap-1 px-2 py-1 font-logo text-lg text-logo-white bg-orange-400 hover:bg-orange-600 border-2 rounded-md"
                 onClick={(e) => {
                    e.preventDefault()
                    console.log('Add pedido')
                    /* adicionarItem(props.produto) */
                 }}>
                 <IconPlus size={20} />
                 <span>Adicionar Pedido</span>
              </button>
           </div>
           <div className="flex flex-1 gap-4 mb-6">
              <div className="flex flex-1 flex-col font-texto">
                 <div className="flex flex-1 gap-4">
                    <div className="flex flex-1 flex-col">
                       <span>Nome do produto:</span>
                       <input
                          className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                          placeholder="Nome do produto"
                          onChange={(e) => alteraPedido({ ...pedido, idOrdemCompra: e.target.value })}
                          value={pedido.idOrdemCompra ?? ""}
                       />
                    </div>
                    <div className="flex flex-col">
                       <span>Código do Pedido:</span>
                       <input
                          className="text-xl text-zinc-400 p-2 rounded-md border-2 outline-none read-only:bg-gray-100"
                          readOnly
                          value={pedido.id ?? ""}
                       />
                    </div>
                 </div>
                 <div className="flex flex-1 gap-4">
                    <div className="flex flex-1 flex-col">
                       <span>qtdeCaixas:</span>
                       <input
                          className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                          placeholder="0,00"
                          onChange={(e) => alteraPedido({ ...pedido, qtdeCaixas: +e.target.value })}
                          value={pedido.qtdeCaixas ?? ""}
                       />
                    </div>
                    <div className="flex flex-1 flex-col">
                       <span>Data:</span>
                       <input
                          className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                          placeholder="E-mail mais utilizado"
                          onChange={(e) => alteraPedido({ ...pedido, data: e.target.value })}
                          value={pedido.data ?? GerarDatas.dataHoraMinuto()}
                       />
                    </div>
                 </div>
                 <div className="flex flex-1 gap-4">
                    <div className="flex flex-1 flex-col">
                       <span>idSupermercado:</span>
                       <input
                          className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                          placeholder="Quantidade de caixas por pallet"
                          onChange={(e) => alteraPedido({ ...pedido, idSupermercado: e.target.value })}
                          value={pedido.idSupermercado ?? ""}
                       />
                    </div>
                    <div className="flex flex-1 flex-col">
                       <span>Quantidade de caixas:</span>
                       <input
                          className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                          placeholder="Total de pallets"
                          onChange={(e) => alteraPedido({ ...pedido, qtdeCaixas: +e.target.value })}
                          value={pedido.qtdeCaixas ?? ""}
                       />
                    </div>
                 </div>
                 <div className="flex flex-1 gap-4">
                    <div className="flex flex-1 flex-col">
                       <span>qtdeCaixas:</span>
                       <input
                          className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                          placeholder="Quantidade de dias"
                          onChange={(e) => alteraPedido({ ...pedido, qtdeCaixas: +e.target.value })}
                          value={pedido.qtdeCaixas ?? ""}
                       />
                    </div>
                    <div className="flex flex-1 flex-col">
                       <span>idSupermercado:</span>
                       <input
                          className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                          placeholder="Tipo de entrega"
                          onChange={(e) => alteraPedido({ ...pedido, idSupermercado: e.target.value })}
                          value={pedido.idSupermercado ?? ""}
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