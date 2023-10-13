import React from 'react'
import ProductMinimal from './ProductMinimal'
import '../css/style.css';
import ProductFeature from './ProductFeatures';
import NewProducts from './ProductMain';

function ProductBox() {
  return (
    <div>
      <ProductMinimal/>
      <ProductFeature/>
      <NewProducts/>
    </div>
  )
}

export default ProductBox
