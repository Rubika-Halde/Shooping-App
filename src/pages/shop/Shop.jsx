import React from 'react'
import { PRODUCTS } from '../../product'
import './Products'
import Products from './Products'

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>pedroShop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((products) => (
          <Products data={products} />
        ))}
      </div>
    </div>
  )
}

export default Shop





