import Image from 'next/image'
import { FC, useContext } from 'react'

import Divider from './common/Divider'
import ZoomContext from './helpers/ZoomContext'

const DressCode: FC = () => {
  const { setImageUrl } = useContext(ZoomContext)

  return (
    <section className="section-container" id="dress">
      <picture className="mb-2">
        <Image
          src="/images/IconosM_J-04.svg"
          alt="date"
          width={100}
          height={100}
        />
      </picture>
      <picture className="mb-8 flex gap-4">
        <Image
          src="/images/5.png"
          alt="date"
          width={600}
          height={500}
          objectFit="cover"
          className="cursor-pointer"
          onClick={() => setImageUrl('/images/5.png')}
        />
      </picture>
      <p className="paragraph">
        Queremos que te sientas cómodo de ser tu mismo, pero si preferís tener
        una guía, te dejamos las siguientes ideas y sugerencias:
      </p>
      <br />
      <ul className="paragraph text-center bodoni">
        <li className="mb-2">
          - Cartagena tiene eterno clima de verano, así que cualquier estilo
          veraniego o playero sirve. ¡Los colores son bienvenidos!
        </li>
        <li className="mb-2">
          - Parte de la ceremonia será en la playa, por ende te recomendamos
          zapatos cómodos o de plataforma
        </li>
        <li className="mb-2">
          - Si te quieres poner unos zapatos de taco/tacon pero crees que no vas
          a poder aguantarlos toda la noche, esta perfecto traer un segundo par
          más cómodo (zapatillas, tennis, planos, etc.) porque acá lo importante
          es bailar toda la noche
        </li>
      </ul>
      <Divider />
    </section>
  )
}

export default DressCode
