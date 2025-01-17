import Aside from "@/components/layout/aside"

export default function HomeLayout({ children }: any) {
   return (
      <div className="flex flex-col md:flex-row px-10">
         {children}
         <Aside />
      </div>
   )
}