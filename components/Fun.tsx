import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { FC } from 'react'

import Divider from './common/Divider'

const Fun: FC = () => {
  return (
    <section className="section-container" id="fun">
      <FontAwesomeIcon icon={faChampagneGlasses} size="5x" className="mb-8" />
      <Image
        src="https://via.placeholder.com/800x600"
        width={800}
        height={600}
      />
      <Divider />
    </section>
  )
}

export default Fun
