import { twMerge } from "tailwind-merge"

export interface InputLoginProps {
   id: string,
   type: string,
   placeholder: string,
   className?: string
}

export default function InputLogin( props: InputLoginProps ) {
   const defaultClass = 'py-1 px-3 border-2 border-zinc-400 rounded-md text-lg'
   const combinedClasses = twMerge(defaultClass, props.className)
   return (
      <input id={props.id}
         type={props.type}
         placeholder={props.placeholder}
         className={combinedClasses}
      />
   )
}