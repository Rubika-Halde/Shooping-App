import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../product'

export const ShopContext = createContext(null)



const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const totalAmountCart = () => {
    let TotalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        TotalAmount += cartItems[item] * itemInfo.Price
      }
    }
    return TotalAmount
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  const UpdateCartItems = (addItem, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: addItem }))
  }

  const contextValue = {
    addToCart,
    removeToCart,
    cartItems,
    UpdateCartItems,
    totalAmountCart,
  }
  console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
