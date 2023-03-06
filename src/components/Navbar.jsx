import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">shop</Link>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
