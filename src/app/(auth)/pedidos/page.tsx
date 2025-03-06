'use client'
import Container from "@/components/layout/container"
import ListaPedidos from "@/components/pedidos/lista-pedidos"
import HeaderPage from "@/components/templates/header-page"
import FormPedido from "@/components/pedidos/form-pedido"
import listaPedidos from "@/core/constants/pedidos"
import { GerarIds, Pedido, pedidos } from "@/core"
import { useState } from "react"

export default function PedidosPage() {

   const [pedidoAtual, setPedidoAtual] = useState<Partial<Pedido> | null>(null)
   const [pedido, setPedido] = useState<Pedido[]>(listaPedidos)

   function selecionarPedido(pedido: Partial<Pedido>) {
      setPedidoAtual(pedido)
   }

   function removerPedido(pedidoRemovido: Pedido) {
      const novaListaPedidos = listaPedidos.filter((p) => p.id !== pedidoRemovido.id)
      setPedido(novaListaPedidos)
   }

   function salvarPedido() {
      const pedidoExiste = pedidos.find((p) => p.id === pedidoAtual?.id)

      if (pedidoExiste) {
         const novosPedidos = pedidos.map((p) => {
            return p.id === pedidoAtual?.id ? pedidoAtual : p
         })
         setPedido(novosPedidos as Pedido[])
      } else {
         setPedido([...pedidos, pedidoAtual as Pedido])
      }
      setPedidoAtual(null)
   }

   function cancelar() {
      setPedidoAtual(null)
   }

   return (
      <Container className="flex-col">
         <div>
            {pedidoAtual ? (
               <FormPedido
                  pedido={pedidoAtual} 
                  titleForm="PEDIDO"
                  alteraPedido={selecionarPedido} 
                  salvar={salvarPedido} 
                  cancelar={cancelar}
               />
            ) : (
               <>
                  <HeaderPage
                     titulo="PEDIDOS"
                     textoBtn={"Adicionar Pedido"}
                     placeholder={"Buscar ordem de compra por produto"}
                     functionBtn={() => selecionarPedido({ id: GerarIds.gerarIdUnico() })}
                  />
                  <ListaPedidos 
                     pedidos={listaPedidos} 
                     selecionarPedido={selecionarPedido} 
                     removerPedido={removerPedido}
                  />
               </>
            )}
         </div>
      </Container>
   )
}