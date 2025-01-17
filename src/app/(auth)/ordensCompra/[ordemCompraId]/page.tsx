import { ordensCompra } from "@/core"
import Container from "@/components/layout/container"

export default function InfoOrdemCompra(props: any) {
   const id = props.params.ordemCompraId
   const ordemCompra = ordensCompra.find((ordemCompra) => ordemCompra.id === id)
   return ordemCompra ? (
      <Container>
         <div>Ordem de compra nº {ordemCompra.id}</div>
      </Container>
   ) : (
      <div>Ordem de compra não encontrada</div>
   )
}