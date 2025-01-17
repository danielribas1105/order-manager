import logo from "@/../public/images/logo/logo-order-manager-370-95.png"
import Avatar from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
   return (
      <div className="flex items-center justify-between py-4 px-8 bg-zinc-100">
         <Link href={"/home"} className="flex gap-3 items-center" >
            <Image src={logo} alt={"Logo Order Manager"} width={200} height={200} />
         </Link>
         <div className='flex items-center gap-4'>
            <Avatar />
         </div>
      </div>
   )
}