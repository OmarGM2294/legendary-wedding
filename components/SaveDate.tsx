import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

import Divider from './common/Divider'

const SaveDate: FC = () => {
  const daysLeft = (): number => {
    const MS_PER_DAY = 1000 * 60 * 60 * 24

    const weedingDate = new Date('2022-08-06').getTime()
    const timeNow = Date.now()

    return Math.floor((weedingDate - timeNow) / MS_PER_DAY)
  }

  return (
    <section className="section-container" id="date">
      <FontAwesomeIcon icon={faCalendar} size="5x" className="mb-8" />
      <p>Viernes 5 de Agosto de 2022</p>
      <p>Ceremonia 4:30pm</p>
      <h2 className="text-7xl mt-16 text-secondary">{daysLeft()}</h2>
      <h3 className="text-3xl text-secondary">días</h3>
      <Divider />
    </section>
  )
}

export default SaveDate
