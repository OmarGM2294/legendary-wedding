import Image from 'next/image'
import { FC } from 'react'

const Banner: FC = () => {
  return (
    <header className="w-full h-[700px] relative">
      <h1 className="invisible">Shit just got real</h1>
      <Image
        className="w-screen"
        src="https://via.placeholder.com/1920x700"
        layout="fill"
        objectFit="cover"
        alt="Legendary Weeding"
      />
    </header>
  )
}

export default Banner
