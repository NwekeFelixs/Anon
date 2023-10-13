import React from 'react'
import SidebarCategories from './SideBarCategory'
import '../css/style.css'

import ProductShowcase from './ProductShowcase';

function SideBar() {
  return (
    <div>
      <SidebarCategories/>
      <ProductShowcase/>
    </div>
  )
}

export default SideBar
