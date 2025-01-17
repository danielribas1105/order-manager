import Image from "next/image"
import Container from "@/components/layout/container"
import semImagem from "@/../public/images/sem-imagem.jpg"

export default function AddProduto() {
   return (
      <Container>
         <div className="flex flex-col gap-4 justify-start">
            <h2 className="font-logo text-xl text-logo-black">Cadastro de novos produtos</h2>
            <div className="w-full h-36 relative bg-white border-2">
               <Image
                  src={semImagem}
                  fill
                  className="object-contain"
                  alt="Foto do produto"
               />
            </div>
         </div>
      </Container>
   )
}