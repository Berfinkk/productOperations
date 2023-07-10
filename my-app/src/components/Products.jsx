import React from 'react'
import { useState } from 'react'
import ProductsItem from './ProductsItem'
import './Products.css'
import NewProduct from './NewProduct'
function Products() {
    const [products,setProducts]=useState([])
  return (
    <div className="product-wrapper">
        <NewProduct products={products} setProducts={setProducts}/>
        <h1>Products</h1>
        <div className="products">
        {products.length === 0 ? (
          <p>Hiç Ürün Yok.</p>
        ) : (
          products.map((product) => (
            <ProductsItem product={product} key={product.id} products={products} setProducts={setProducts} />
          ))
        )}
      </div>
    </div>
  )
}

export default Products