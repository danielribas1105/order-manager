import Especificacoes from "./Especificacoes"
import Precificavel from "./Precificavel"

export default interface Produto extends Precificavel {
   id: string
   nomeProduto: string
   marca: string
   peso?: string
   imagemURL: string
   especificacoes: Especificacoes
}