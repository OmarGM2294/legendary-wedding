import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { FC, useState } from 'react'
import { Link } from 'react-scroll'

const AppBar: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="fixed-menu md:hidden">
        <Image
          src="/images/Shitjustgotreal-01.png"
          height={34}
          width={173}
          alt="shit just got real"
        />
        <button onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
      </div>
      <div
        className={`drawer ${
          open ? 'translate-x-0' : 'translate-x-full'
        } md:app-bar`}
      >
        <div className="drawer-menu">
          <h2 className="text-2xl text-secondary">#LegendaryWeddingM&J</h2>
          <button onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </button>
        </div>
        <ul className="nav md:nav-list">
          <li>
            <Link
              to="date"
              smooth={true}
              onClick={() => setOpen(false)}
              offset={-50}
            >
              Save the date
            </Link>
          </li>
          <li>
            <Link
              to="flight"
              smooth={true}
              onClick={() => setOpen(false)}
              offset={-50}
            >
              Book the flight
            </Link>
          </li>
          <li>
            <Link
              to="dress"
              smooth={true}
              onClick={() => setOpen(false)}
              offset={-50}
            >
              Suit up
            </Link>
          </li>
          <li>
            <Link
              to="fun"
              smooth={true}
              onClick={() => setOpen(false)}
              offset={-50}
            >
              Have fun
            </Link>
          </li>
          <li>
            <Link
              to="gift"
              smooth={true}
              onClick={() => setOpen(false)}
              offset={-50}
            >
              Send a gift
            </Link>
          </li>
          <li>
            <Link
              to="rsvp"
              smooth={true}
              onClick={() => setOpen(false)}
              offset={-50}
            >
              RSVP
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AppBar
