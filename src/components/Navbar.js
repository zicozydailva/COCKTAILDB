import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="nav">
      <header>
        <Link className="link" to="/">
          <h1>COCKTAIL_DB</h1>
        </Link>
        <div className="links">
          <Link className="link" to="/about"><h3>About</h3></Link>
          <Link className="link" to="/contact"><h3>Contact Us</h3></Link>


        </div>
      </header>
    </nav>
  )
}

export default Navbar
