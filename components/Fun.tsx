import Image from 'next/image'
import { FC } from 'react'

import Divider from './common/Divider'

const Fun: FC = () => {
  return (
    <section className="section-container" id="fun">
      <picture className="mb-2">
        <Image
          src="/images/IconosM_J-05.svg"
          alt="date"
          width={100}
          height={100}
        />
      </picture>
      <Image
        src="/images/cartagena-bar.jpeg"
        alt="fun"
        width={600}
        height={400}
        objectFit="cover"
      />
      <p className="paragraph mt-8">
        En la noche del día anterior a la boda vamos a reunirnos los que estemos
        en Cartagena en un bar para comenzar a celebrar y conocernos entre
        todos, más detalles se los haremos saber cerca a la fecha.
      </p>
      <Divider />
    </section>
  )
}

export default Fun
