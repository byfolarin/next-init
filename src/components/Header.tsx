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
      <header>
        <Image src='https://bytegrad.com/course-assets/youtube/example-logo.png'
        alt="Logo description"
        className="w-[35px] h-[35px]"
        width={35}
        height={35}
        />

        <nav>
            <ul>
             { navLink.map((link)=>(
                    <li key={link.href}>
                        <Link href={link.href}>
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
