import Image from 'next/image'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="section-container pb-16">
      <picture>
        <Image
          src="/images/IconosM_J-08.svg"
          alt="date"
          width={100}
          height={100}
        />
      </picture>
      <p>#LegendaryWeddingM&J</p>
      <p>Cartagena, Colombia</p>
      <p>05 · 08 · 2022</p>
    </footer>
  )
}

export default Footer
