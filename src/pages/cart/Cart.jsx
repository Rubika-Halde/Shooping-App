import React, { useContext } from 'react'
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../context/Shop-context'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, totalAmountCart } = useContext(ShopContext)
  const TotalAmount = totalAmountCart()
  const navigate = useNavigate()
  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      <div className="checkout">
        <p>SubTotal :${TotalAmount}</p>
        <button onClick={() => navigate('/')}>continue shopping</button>
        <button>checkout</button>
      </div>
    </div>
  )
}

export default Cart
