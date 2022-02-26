import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

import Divider from './common/Divider'

const Flight: FC = () => {
  return (
    <section className="section-container" id="flight">
      <FontAwesomeIcon icon={faLocationPin} size="5x" className="mb-8" />
      <p className="paragraph">
        Para la celebración buscamos un lugar que nos une, nos hace felices y de
        hecho fue nuestro primer viajes juntos: la playa. En una de nuestras
        ciudades favoritas del mundo, una ciudad mágica y encantadora tanto para
        locales como extranjeros. Así es, te esperamos en
      </p>
      <h2 className="text-4xl font-bold text-center mt-3 mb-8 text-secondary">
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
