import Container from "@/components/layout/container";
import ListaOrdensCompra from "@/components/ordensCompra/lista-ordens-compra";
import HeaderPage from "@/components/templates/header-page";

export default function OrdensCompraPage() {
   return (
      <Container className="flex-col">
         <HeaderPage
            titulo="ORDENS DE COMPRA CADASTRADAS"
            textoBtn={"Adicionar Ordem de Compra"}
            placeholder={"Buscar ordem de compra"} 
            functionBtn={function (): void {
               throw new Error("Function not implemented.");
            } }         />
         <ListaOrdensCompra />
      </Container>
   )
}