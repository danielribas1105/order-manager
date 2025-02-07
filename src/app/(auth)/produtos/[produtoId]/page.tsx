'use client'
import Image from "next/image"
import { produtos } from "@/core"
import { GerarDatas } from "@/core"
import { GerarIds } from "@/core"
import Container from "@/components/layout/container"
import HeaderPageItem from "@/components/templates/header-pageItem"
import BtnsSaveCancel from "@/components/templates/btns-save-cancel"

export default function InfoProduto(props: any) {
   const id = props.params.produtoId
   const produto = produtos.find((produto) => produto.id === id)
   return produto ? (
      <Container className="flex-col">
         <HeaderPageItem titulo={"INFORMAÇÕES DO PRODUTO"} linkBack={"/produtos"} />
         <div className="flex flex-1 gap-4 mb-6">
            <div className="w-60 h-60 relative bg-white border-2">
               <Image
                  src={produto.imagemURL}
                  fill
                  className="object-contain"
                  alt={`Foto do produto ${produto.nomeProduto}`}
               />
            </div>
            <div className="flex flex-1 flex-col font-texto">
               <div className="flex flex-1 flex-col">
                  <span>Produto:</span>
                  <input
                     className="text-2xl text-logo-black p-2 rounded-md border-2 outline-none"
                     placeholder="Nome do produto"
                     value={produto?.nomeProduto}
                  />
               </div>
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>Marca:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Marca do produto"
                        value={produto?.marca}
                     />
                  </div>
                  <div className="flex flex-1 flex-col">
                     <span>Peso:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Marca do produto"
                        value={produto?.peso}
                     />
                  </div>
               </div>
               <div className="flex flex-1 gap-4">
                  <div className="flex flex-1 flex-col">
                     <span>Código do produto:</span>
                     <input
                        className="text-xl text-zinc-400 p-2 rounded-md border-2 outline-none read-only:bg-gray-100"
                        readOnly
                        value={produto?.id}
                     />
                  </div>
                  <div className="flex flex-1 flex-col">
                     {/* <span>Info???:</span>
                     <input
                        className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                        placeholder="Info"
                        value={''}
                     /> */}
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-col pt-6 border-t-4">
            <div className="flex gap-2 items-center justify-between mb-4">
               <div className="flex gap-2 items-center">
                  <h2 className="font-logo text-xl text-logo-black">ORDEM DE COMPRA:</h2>
                  <input
                     className="text-xl text-zinc-400 text-center p-2 rounded-md border-2 outline-none read-only:bg-gray-100"
                     readOnly
                     value={GerarIds.gerarIdUnico()}
                  />
               </div>
               <div className="flex gap-2 items-center">
                  <h2 className="font-logo text-xl text-logo-black">DATA:</h2>
                  <input
                     className="text-xl text-zinc-400 text-center p-2 rounded-md border-2 outline-none read-only:bg-gray-100"
                     readOnly
                     value={GerarDatas.dataHoraMinuto()}
                  />
               </div>
               <BtnsSaveCancel salvar={function (): void {
                  throw new Error("Function not implemented.")
               } } cancelar={function (): void {
                  throw new Error("Function not implemented.")
               } }/>
            </div>
            <div className="flex flex-1 gap-4">
               <div className="flex flex-1 flex-col">
                  <span>Preço Promocional:</span>
                  <input
                     className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                     placeholder="Marca do produto"
                     value={produto?.marca}
                  />
               </div>
               <div className="flex flex-1 flex-col">
                  <span>Prazo:</span>
                  <input
                     className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                     placeholder="Marca do produto"
                     value={produto?.marca}
                  />
               </div>
               <div className="flex flex-1 flex-col">
                  <span>Entrega:</span>
                  <input
                     className="text-xl text-logo-black p-2 rounded-md border-2 outline-none"
                     placeholder="Marca do produto"
                     value={produto?.peso}
                  />
               </div>
            </div>
         </div>
      </Container>
   ) : (
      <div>Produto não cadastrado</div>
   )
}