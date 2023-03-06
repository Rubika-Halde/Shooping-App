import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import './components/Navbar.css'
import Shop from './pages/shop/Shop'
import './pages/shop/Shop.css'
import { ShopContextProvider } from './context/Shop-context'
import Cart from './pages/cart/Cart'
import './pages/cart/Cart.css'

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
