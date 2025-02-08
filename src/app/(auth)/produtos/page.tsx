import Container from "@/components/layout/container"
import ListaProdutos from "@/components/produtos/lista-produtos"
import HeaderPage from "@/components/templates/header-page"

export default function ProdutosPage() {
   return (
      <Container className="flex-col">
         <HeaderPage 
            titulo="PRODUTOS CADASTRADOS"
            textoBtn="Adicionar Produto"
            placeholder="Burcar produto" 
            functionBtn={function (): void {
               throw new Error("Function not implemented.")
            }}/>
         <ListaProdutos/>
      </Container>
   )
}