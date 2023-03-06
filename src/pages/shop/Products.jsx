import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context'

const Products = (props) => {
  const { id, productName, Price, productImage } = props.data
  const { addToCart, cartItems } = useContext(ShopContext)
  const addCartItems = cartItems[id]
  return (
    <div className="product">
      <img src={productImage} alt="img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${Price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {addCartItems > 0 && <>({addCartItems})</>}
        </button>
      </div>
    </div>
  )
}

export default Products
