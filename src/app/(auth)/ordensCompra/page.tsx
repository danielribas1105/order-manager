'use client'
import Container from "@/components/layout/container"
import ListaOrdensCompra from "@/components/ordensCompra/lista-ordens-compra"
import HeaderPage from "@/components/templates/header-page"
import listaOrdensCompra from "@/core/constants/ordensCompra"
import { GerarIds, OrdemCompra } from "@/core"
import { useState } from "react"
import FormOrdemCompra from "@/components/ordensCompra/form-ordem-compra"

export default function OrdensCompraPage() {

   const [ordemCompraAtual, setOrdemCompraAtual] = useState<Partial<OrdemCompra> | null>(null)
   const [ordensCompra, setOrdensCompra] = useState<OrdemCompra[]>(listaOrdensCompra)

   function selecionarOrdemCompra(ordemCompra: Partial<OrdemCompra>) {
      setOrdemCompraAtual(ordemCompra)
   }

   function removerOrdemCompra(ordemCompraRemovida: OrdemCompra) {
      const novaListaOrdensCompra = ordensCompra.filter((o) => o.id !== ordemCompraRemovida.id)
      setOrdensCompra(novaListaOrdensCompra)
   }

   function salvarOrdemCompra() {
      const ordemCompraExiste = ordensCompra.find((o) => o.id === ordemCompraAtual?.id)

      if (ordemCompraExiste) {
         const novasOrdensCompra = ordensCompra.map((o) => {
            return o.id === ordemCompraAtual?.id ? ordemCompraAtual : o
         })
         setOrdensCompra(novasOrdensCompra as OrdemCompra[])
      } else {
         setOrdensCompra([...ordensCompra, ordemCompraAtual as OrdemCompra])
      }
      setOrdemCompraAtual(null)
   }

   function cancelar() {
      setOrdemCompraAtual(null)
   }

   return (
      <Container className="flex-col">
         <div>
            {ordemCompraAtual ? (
               <FormOrdemCompra 
                  ordemCompra={ordemCompraAtual} 
                  alteraOrdemCompra={selecionarOrdemCompra} 
                  salvar={salvarOrdemCompra} 
                  cancelar={cancelar} />
            ) : (
               <>
                  <HeaderPage
                     titulo="ORDENS DE COMPRA CADASTRADAS"
                     textoBtn={"Adicionar Ordem de Compra"}
                     placeholder={"Buscar ordem de compra"}
                     functionBtn={() => selecionarOrdemCompra({ id: GerarIds.gerarIdUnico() })}
                  />
                  <ListaOrdensCompra
                     ordensCompra={ordensCompra}
                     selecionarOrdemCompra={selecionarOrdemCompra}
                     removerOrdemCompra={removerOrdemCompra}
                  />
               </>
            )}
         </div>
      </Container>
   )
}