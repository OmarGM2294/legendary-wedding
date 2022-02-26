import { faBlackTie } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

import Divider from './common/Divider'

const DressCode: FC = () => {
  return (
    <section className="section-container" id="dress">
      <FontAwesomeIcon icon={faBlackTie} size="5x" className="mb-8" />
      <Divider />
    </section>
  )
}

export default DressCode
