'use client'
import Container from "@/components/layout/container"
import ListaProdutos from "@/components/produtos/lista-produtos"
import HeaderPage from "@/components/templates/header-page"
import { GerarIds, Produto } from "@/core"
import { useState } from "react"
import listaProdutos from "@/core/constants/produtos"
import FormProduto from "@/components/produtos/form-produto"

export default function ProdutosPage() {

   const [ produtoAtual, setProdutoAtual ] = useState<Partial<Produto> | null >(null)
   const [ produtos, setProdutos ] = useState<Produto[]>(listaProdutos)

   function selecionarProduto(produto: Partial<Produto>) {
      setProdutoAtual(produto)
   }

   function removerProduto(produtoRemovido: Produto) {
      const novaListaProdutos = produtos.filter((p) => p.id !== produtoRemovido.id)
      setProdutos(novaListaProdutos)
   }

   function salvarProduto() {
      const produtoExiste = produtos.find((p) => p.id === produtoAtual?.id)

      if(produtoExiste) {
         const novosProdutos = produtos.map((p) => {
            return p.id === produtoAtual?.id ? produtoAtual : p
         })
         setProdutos(novosProdutos as Produto[])
      }else {
         setProdutos([...produtos, produtoAtual as Produto])
      }
      setProdutoAtual(null)
   }

   function cancelar() {
      setProdutoAtual(null)
   }

   return (
      <Container className="flex-col">
         <div>
            { produtoAtual ? (
               <FormProduto 
                  produto={produtoAtual} 
                  alteraProduto={selecionarProduto} 
                  salvar={salvarProduto} 
                  cancelar={cancelar}
               />
            ):(
               <>
                  <HeaderPage 
                     titulo="PRODUTOS CADASTRADOS"
                     textoBtn="Adicionar Produto"
                     placeholder="Burcar produto" 
                     functionBtn={() => selecionarProduto({ id: GerarIds.newId() })}
                  />
                  <ListaProdutos 
                     produtos={produtos} 
                     selecionarProduto={selecionarProduto} 
                     removerProduto={removerProduto}
                  />
               </>
            ) }
         </div>
      </Container>
   )
}