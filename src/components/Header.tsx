import Image from "next/image"


export default function Header() {
  return (
    <div>
      <header>
        <Image src='https://bytegrad.com/course-assets/youtube/example-logo.png'
        alt="Logo description"
        width={50}
        height={50}
        />
      </header>
    </div>
  )
}
