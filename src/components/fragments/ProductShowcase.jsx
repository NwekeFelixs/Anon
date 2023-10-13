import React from 'react';
import '../css/style.css'
import { IoStar, IoStarHalfOutline, IoStarOutline } from 'react-icons/io5';
import product1 from '../img/products/1.jpg'
import product2 from '../img/products/2.jpg'
import product3 from '../img/products/3.jpg'
import product4 from '../img/products/4.jpg'


const products = [
  {
    id: 1,
    name: "baby fabric shoes",
    image: product1,
    description: "Adorable baby fabric shoes for your little one.",
    rating: 5,
    oldPrice: 5.00,
    price: 4.00,
  },
  {
    id: 2,
    name: "men's hoodies t-shirt",
    image: product2,
    description: "Comfortable men's hoodies t-shirt for a stylish look.",
    rating: 4.5,
    oldPrice: 17.00,
    price: 7.00,
  },
  {
    id: 3,
    name: "girls t-shirt",
    image: product3,
    description: "Stylish girls t-shirt for a trendy appearance.",
    rating: 4.5,
    oldPrice: 5.00,
    price: 3.00,
  },
  {
    id: 4,
    name: "woolen hat for men",
    image: product4,
    description: "Warm woolen hat for men to keep you cozy.",
    rating: 5,
    oldPrice: 15.00,
    price: 12.00,
  },
];

const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      <h3 className="showcase-heading">best sellers</h3>
      <div className="showcase-wrapper">
        <div className="showcase-container">
          {products.map((product) => (
            <div className="showcase" key={product.id}>
              <a href="#" className="showcase-img-box">
                <img src={product.image} alt={product.name} width="75" height="75" className="showcase-img" />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">{product.name}</h4>
                </a>
                <div className="showcase-rating">
                
                </div>
                <div className="price-box">
                  <del>${product.oldPrice.toFixed(2)}</del>
                  <p className="price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
