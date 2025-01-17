import Container from "@/components/layout/container"
import ListaProdutos from "@/components/produtos/lista-produtos"
import HeaderPage from "@/components/templates/header-page"

export default function ProdutosPage() {
   return (
      <Container className="flex-col">
         <HeaderPage 
            titulo="PRODUTOS CADASTRADOS" 
            linkBtn="/produtos/addProduto"
            textoBtn="Adicionar Produto"
            placeholder="Burcar produto"
         />
         <ListaProdutos/>
      </Container>
   )
}