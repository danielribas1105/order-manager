'use client'
import Container from "@/components/layout/container"
import HeaderPage from "@/components/templates/header-page"
import FormSupermercado from "@/components/supermercado/form-supermercado"
import { GerarIds, Supermercado } from "@/core"
import listaSupermercados from "@/core/constants/supermercados"
import { useState } from "react"
import ListaSupermercados from "@/components/supermercado/lista-supermercado"

export default function SupermercadosPage() {

   const [supermercadoAtual, setSupermercadoAtual] = useState<Partial<Supermercado> | null>(null)
   const [supermercados, setSupermercados] = useState<Supermercado[]>(listaSupermercados)

   function selecionarSupermercado(supermercado: Partial<Supermercado>) {
      setSupermercadoAtual(supermercado)
   }

   function removerSupermercado(supermercadoRemovido: Supermercado) {
      const novaListaSupermercados = supermercados.filter((s) => s.id !== supermercadoRemovido.id)
      setSupermercados(novaListaSupermercados)
   }

   return (
      <Container className="flex-col">
         <div>
            {supermercadoAtual ? (
               <FormSupermercado />
            ) : (
               <>
                  <HeaderPage
                     titulo="SUPERMERCADOS CADASTRADOS"
                     textoBtn="Adicionar Supermercado"
                     placeholder="Buscar supermercado"
                     functionBtn={() => selecionarSupermercado({ id: GerarIds.newId() })}
                  />
                  <ListaSupermercados
                     supermercados={supermercados}
                     selecionarSupermercado={selecionarSupermercado}
                     removerSupermercado={removerSupermercado}
                  />
               </>
            )}
         </div>
      </Container>
   )
}