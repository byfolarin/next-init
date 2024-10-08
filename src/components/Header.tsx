import Image from "next/image"
import Link from "next/link"


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
                        <Link className="text-zinc-400" href={link.href}>
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
