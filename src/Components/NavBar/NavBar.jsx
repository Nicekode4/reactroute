import React from 'react'
import { Link } from 'react-router-dom'
import Forside from '../../Pages/Forside/Forside'
import Kontakt from '../../Pages/Kontakt/Kontakt'

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Forside</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/goals">Goals</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar