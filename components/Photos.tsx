import Image from 'next/image'
import { FC, useContext } from 'react'

import ZoomContext from './helpers/ZoomContext'

const Photos: FC = () => {
  const { setImageUrl } = useContext(ZoomContext)

  return (
    <section className="section-container grid grid-cols-1 gap-5 mx-auto lg:grid-cols-3">
      <picture className="w-full rounded h-96 relative cursor-pointer">
        <Image
          src="/images/1.png"
          alt="M&J"
          layout="fill"
          objectFit="cover"
          onClick={() => setImageUrl('/images/1.png')}
        />
      </picture>
      <picture className="w-full rounded h-96 relative cursor-pointer">
        <Image
          src="/images/2.png"
          alt="M&J"
          layout="fill"
          objectFit="cover"
          onClick={() => setImageUrl('/images/2.png')}
        />
      </picture>
      <picture className="w-full rounded h-96 relative cursor-pointer">
        <Image
          src="/images/3.png"
          alt="M&J"
          layout="fill"
          objectFit="cover"
          onClick={() => setImageUrl('/images/3.png')}
        />
      </picture>
    </section>
  )
}

export default Photos
