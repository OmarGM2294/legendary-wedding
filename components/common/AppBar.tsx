import { FC } from 'react'
import { Link } from 'react-scroll'

const AppBar: FC = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="date" smooth={true}>
            Save the date
          </Link>
        </li>
        <li>
          <Link to="flight" smooth={true}>
            Book the flight
          </Link>
        </li>
        <li>
          <Link to="dress" smooth={true}>
            Suit up
          </Link>
        </li>
        <li>
          <Link to="fun" smooth={true}>
            Have fun
          </Link>
        </li>
        <li>
          <Link to="gift" smooth={true}>
            Send a gift
          </Link>
        </li>
        <li>
          <Link to="rsvp" smooth={true}>
            RSVP
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default AppBar
