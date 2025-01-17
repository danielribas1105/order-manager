import Link from "next/link"
import Image from "next/image"
import logo from '@/../public/images/logo/logo-order-manager-400-200.png'
import InputLogin from "@/components/templates/input-login"

export default function Login() {
   return (
      <div className="flex flex-col gap-3 items-center py-10 h-screen">
         <Image src={logo} alt={"Logo Order Manager"} width={500} height={500}/>
         <InputLogin 
            id="login" 
            type="email" 
            placeholder="Digite seu login"
         />
         <InputLogin 
            id="senha"
            type="password" 
            placeholder="Digite sua senha"
         />
         <Link href='/home'
            className="bg-logo-blue-dark px-10 py-2 text-white rounded-md hover:bg-logo-blue">
            Entrar
         </Link>
      </div>
   )
}
