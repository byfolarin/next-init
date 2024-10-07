import Image from "next/image"


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
      </header>
    </div>
  )
}
