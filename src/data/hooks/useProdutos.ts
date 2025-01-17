import { useState } from "react"
import { Produto } from "@/core"
import listaProdutos from "@/core/constants/produtos"

export default function useProdutos() {

   const [produtos, setProdutos] = useState<Produto[]>(listaProdutos)

   return {
      produtos
   }
}