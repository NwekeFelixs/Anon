import React from 'react'
import '../css/style.css';
import SideBar from './SideBar';
import ProductBox from './ProductBox';

function Product() {
  return (
    <div className='product-container'>
      <div className='container'>
        <SideBar/>
        <ProductBox/>
      </div>
    </div>
  )
}

export default Product
