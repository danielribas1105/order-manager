import CardHome from "@/components/templates/card-home"
import { IconClipboardText, IconEdit, IconFileAnalytics, IconFileArrowLeft,  IconShoppingCart, IconUsers } from "@tabler/icons-react"

export default function Home() {
   return (
      <div className="flex flex-col items-center md:items-start gap-5 md:basis-3/4">
         <h1 className="font-logo font-bold text-2xl text-logo-black">Bem-vindo ...usuário!</h1>
         <div className="flex flex-col md:flex-row md:flex-wrap gap-10">
            <CardHome
               link={"/produtos"}
               titulo={"PRODUTOS"}
               descricao={"Cadastrar, editar ou excluir produtos."}
               icon={IconShoppingCart}
            />
            <CardHome
               link={"/ordensCompra"}
               titulo={"ORDENS DE COMPRA"}
               descricao={"Cadastrar e gerenciar as ordens de compras."}
               icon={IconEdit}
            />
            <CardHome
               link={"/pedidos"}
               titulo={"PEDIDOS"}
               descricao={"Acompanhar os pedidos realizados"}
               icon={IconClipboardText}
            />
            <CardHome
               link={"/usuarios"}
               titulo={"USUÁRIOS"}
               descricao={"Cadastro de usuários."}
               icon={IconUsers}
            />
            <CardHome
               link={"/importar"}
               titulo={"IMPORTAR"}
               descricao={"Módulo para importação de arquivos"}
               icon={IconFileArrowLeft}
            />
            <CardHome
               link={"/relatorios"}
               titulo={"RELATÓRIOS"}
               descricao={"Módulo de relatórios"}
               icon={IconFileAnalytics}
            />
         </div>
      </div>
   )
}