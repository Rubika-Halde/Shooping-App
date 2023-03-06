import React from 'react'
import { PRODUCTS } from '../../product'
import { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context'

const CartItem = (props) => {
  const { id, productName, Price, productImage } = props.data
  const { addToCart, removeToCart, cartItems, UpdateCartItems } = useContext(
    ShopContext,
  )

  return (
    <div className="cartItem">
      <img src={productImage} alt="img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${Price}</p>
        <div className="countHandler">
          <button onClick={() => removeToCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => UpdateCartItems(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
