import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { FC } from 'react'

import Divider from './common/Divider'

const Flight: FC = () => {
  return (
    <section className="section-container" id="flight">
      <picture className="mb-2">
        <Image
          src="/images/IconosM_J-02.svg"
          alt="date"
          width={100}
          height={100}
        />
      </picture>
      <p className="paragraph">
        Para la celebración buscamos un lugar que nos une, nos hace felices y de
        hecho fue nuestro primer viajes juntos: la playa. En una de nuestras
        ciudades favoritas del mundo, una ciudad mágica y encantadora tanto para
        locales como extranjeros. Así es, te esperamos en
      </p>
      <h2 className="sanies text-4xl font-bold text-center mt-3 mb-8 text-secondary">
        Cartagena de Indias, Colombia
      </h2>
      <p className="paragraph">
        Especificamente, te esperamos en BOTSWANA Cartagena, un Restaurante +
        Tiki Bar frente a las playas del Mar Caribe.
      </p>
      <p>Cra 9 # 43 - 83, La Boquilla</p>
      <a
        href="https://www.instagram.com/botswanacartagena/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="3x"
          className="my-4 text-secondary"
        />
      </a>
      <p className="paragraph">
        Te recomendamos hospedarte en un alojamiento cerca, sin embargo podemos
        ayudarte a buscar la mejor opción.
      </p>
      <Divider />
    </section>
  )
}

export default Flight
