import Image from 'next/image'
import { FC } from 'react'

import Divider from './common/Divider'

const Gift: FC = () => {
  return (
    <section className="section-container" id="gift">
      <picture className="mb-2">
        <Image
          src="/images/IconosM_J-07.svg"
          alt="date"
          width={100}
          height={100}
        />
      </picture>
      <p className="paragraph">
        Para nosotros, el mayor regalo que podemos recibir por parte de cada uno
        es que nos acompañen en este día para hacerlo más especial, que traigan
        la mejor actitud y energía. Sin embargo, para aquellas personas que les
        gustaría dar alguito extra, pueden contribuir a nuestra Luna de Miel, la
        cual nos llevará a conocer Europa por primera vez! Sus aportes pueden
        realizarse a través de efectivo o transferencia bancaria.
      </p>
      <h2 className="sanies text-3xl text-secondary my-9 text-center">
        <Image
          src="/images/IconosM_J-06.svg"
          alt="date"
          width={80}
          height={80}
          className="text-image"
        />
        Contribución
        <br />
        M&J en Europa!
      </h2>
      <ul className="bodoni text-center mb-6">
        <li>Nombre: Melany Cristal</li>
        <li>C.E. 300533960</li>
        <li>Banco: Bancolombia</li>
        <li>Tipo de cuenta: Cuenta de ahorros</li>
        <li>Número: 04842784790</li>
      </ul>
      <ul className="bodoni text-center">
        <li>Nombre: Juan Pablo Estefan Ruiz Molina</li>
        <li>C.C. 1018423059</li>
        <li>Banco: Scotiabank Colpatria</li>
        <li>Tipo de cuenta: Cuenta de ahorros</li>
        <li>Número: 1008360355</li>
      </ul>
      <Divider />
    </section>
  )
}

export default Gift
