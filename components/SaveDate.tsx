import Image from 'next/image'
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
      <picture className="mb-2 flex flex-col">
        <Image
          src="/images/IconosM_J-01.svg"
          alt="date"
          width={100}
          height={100}
        />
        <h2
          className="md:hidden mb-4 text-center text-2xl sanies"
          style={{ marginTop: -10 }}
        >
          Save the date
        </h2>
      </picture>
      <p>Viernes 5 de Agosto de 2022</p>
      <p>Ceremonia 4:30pm</p>
      <h2 className="bodoni text-7xl mt-16 text-secondary">{daysLeft()}</h2>
      <h3 className="bodoni text-3xl text-secondary">días</h3>
      <Divider />
    </section>
  )
}

export default SaveDate
