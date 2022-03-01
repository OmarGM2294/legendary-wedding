/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { FC } from 'react'

const Banner: FC = () => {
  return (
    <header className="w-full h-[700px] relative">
      <h1 className="invisible">Shit just got real</h1>
      <Image
        className="w-screen"
        src="/images/Foto_Banner.jpg"
        layout="fill"
        objectFit="cover"
        alt="Legendary Weeding"
      />
      <img
        className="absolute z-10 w-1/3 hidden top-3 right-3 md:block"
        src="/images/Shitjustgotreal-01.png"
        alt="Shit Just Got Real"
      />
    </header>
  )
}

export default Banner
