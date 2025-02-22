import { useState } from "react"
import { Supermercado } from "@/core"
import listaSupermercados from "@/core/constants/supermercados"

export default function useSupermercado() {

   const [supermercados, setSupermercados] = useState<Supermercado[]>(listaSupermercados)

   return {
      supermercados
   }
}