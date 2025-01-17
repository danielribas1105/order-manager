import { useState } from "react"
import { Usuario } from "@/core"
import listaUsuarios from "@/core/constants/usuarios"

export default function useUsuarios() {

   const [usuarios, setUsuarios] = useState<Usuario[]>(listaUsuarios)

   return {
      usuarios
   }
}