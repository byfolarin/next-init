'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const navLink =[
    {
        href:'/',
        label:'Home',
    },

    {
        href:'/posts',
        label:'Posts', 
    }
]


export default function Header() {


    const pathName = usePathname();
    console.log(pathName)

  return (
    <div>
      <header className="flex justify-between items-center py-4 px-7 border-b">

        <Link href={'/'}>
        <Image src='https://bytegrad.com/course-assets/youtube/example-logo.png'
        alt="Logo description"
        className="w-[35px] h-[35px]"
        width={35}
        height={35}
        />
        </Link>

        <nav>
            <ul className="flex gap-x-5 text-[14px]">
             { navLink.map((link)=>(
                    <li key={link.href}>
                        <Link href={link.href} className={`${link.href === pathName ? 'text-zinc-900' : 'text-zinc-400'}`} >
                            {link.label}
                        </Link>                                 
                    </li>
             ))
             }
            </ul>
        </nav>
      </header>
    </div>
  )
}
