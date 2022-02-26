import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="section-container pb-16">
      <FontAwesomeIcon icon={faHeart} size="2x" className="mb-4" />
      <p>#LegendaryWeddingM&J</p>
      <p>Cartagena, Colombia</p>
      <p>05 · 08 · 2022</p>
    </footer>
  )
}

export default Footer
