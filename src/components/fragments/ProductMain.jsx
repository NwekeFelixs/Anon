import React from 'react';
import '../css/style.css'

// Import product images from the 'img/products' directory
import jacket3 from '../img/products/jacket-3.jpg';
import jacket4 from '../img/products/jacket-4.jpg';
import shirt1 from '../img/products/shirt-1.jpg';
import shirt2 from '../img/products/shirt-2.jpg';
import jacket5 from '../img/products/jacket-5.jpg';
import jacket6 from '../img/products/jacket-6.jpg';
import clothes3 from '../img/products/clothes-3.jpg';
import clothes4 from '../img/products/clothes-4.jpg';
import shoe2 from '../img/products/shoe-2.jpg';
import shoe2_1 from '../img/products/shoe-2_1.jpg';
import watch3 from '../img/products/watch-3.jpg';
import watch4 from '../img/products/watch-4.jpg';
import watch1 from '../img/products/watch-1.jpg';
import watch2 from '../img/products/watch-2.jpg';
import partyWear1 from '../img/products/party-wear-1.jpg';
import partyWear2 from '../img/products/party-wear-2.jpg';
import jacket1 from '../img/products/jacket-1.jpg';
import jacket2 from '../img/products/jacket-2.jpg';
import sports2 from '../img/products/sports-2.jpg';
import sports4 from '../img/products/sports-4.jpg';
import shoe1 from '../img/products/shoe-1.jpg';
import shoe1_1 from '../img/products/shoe-1_1.jpg';
import shorts1 from '../img/products/shorts-1.jpg';
import shorts2 from '../img/products/shorts-2.jpg';

const products = [
  {
    category: 'jacket',
    name: "Mens Winter Leathers Jackets",
    rating: [1, 2, 3],
    price: 48.0,
    oldPrice: 75.0,
    imageDefault: jacket3,
    imageHover: jacket4,
    badge: '15%',
  },
  {
    category: 'shirt',
    name: 'Pure Garment Dyed Cotton Shirt',
    rating: [1, 2, 3],
    price: 45.0,
    oldPrice: 56.0,
    imageDefault: shirt1,
    imageHover: shirt2,
    badge: 'sale',
  },
  {
    category: 'jacket',
    name: 'MEN Yarn Fleece Full-Zip Jacket',
    rating: [1, 2, 3],
    price: 58.0,
    oldPrice: 65.0,
    imageDefault: jacket5,
    imageHover: jacket6,
  },

  {
    category: 'skirt',
    name: 'Black Floral Wrap Midi Skirt',
    rating: [1, 2, 3, 4, 5],
    price: 25.0,
    oldPrice: 35.0,
    imageDefault: clothes3,
    imageHover: clothes4,
    badge: 'new',
  },

  {
    category: 'casual',
    name: "Casual Men's Brown shoes",
    rating: [1, 2, 3, 4, 5],
    price: 99.0,
    oldPrice: 105.0,
    imageDefault: shoe2,
    imageHover: shoe2_1,
  },
  {
    category: 'watches',
    name: 'Pocket Watch Leather Pouch',
    rating: [1, 2, 3],
    price: 150.0,
    oldPrice: 170.0,
    imageDefault: watch3,
    imageHover: watch4,
    badge: 'sale',
  },
  {
    category: 'watches',
    name: 'Smart watche Vital Plus',
    rating: [1, 2, 3, 4],
    price: 100.0,
    oldPrice: 120.0,
    imageDefault: watch1,
    imageHover: watch2,
  },

  {
    category: 'party wear',
    name: "Womens Party Wear Shoes",
    rating: [1, 2, 3],
    price: 25.0,
    oldPrice: 30.0,
    imageDefault: partyWear1,
    imageHover: partyWear2,
    badge: 'sale',
  },

  {
    category: 'jacket',
    name: "Mens Winter Leathers Jackets",
    rating: [1, 2, 3, 4],
    price: 32.0,
    oldPrice: 45.0,
    imageDefault: jacket1,
    imageHover: jacket2,
  },
  {
    category: 'sports',
    name: "Trekking & Running Shoes - black",
    rating: [1, 2, 3],
    price: 58.0,
    oldPrice: 64.0,
    imageDefault: sports2,
    imageHover: sports4,
    badge: 'sale',
  },
  {
    category: 'formal',
    name: "Men's Leather Formal Wear shoes",
    rating: [1, 2, 3, 4],
    price: 50.0,
    oldPrice: 65.0,
    imageDefault: shoe1,
    imageHover: shoe1_1,
  },
  {
    category: 'shorts',
    name: "Better Basics French Terry Sweatshorts",
    rating: [1, 2, 3],
    price: 78.0,
    oldPrice: 85.0,
    imageDefault: shorts1,
    imageHover: shorts2,
    badge: 'sale',
  },
  // ... (other product entries)
];

const NewProducts = () => {
  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="showcase" key={index}>
            <div className="showcase-banner">
              <img src={product.imageDefault} alt={product.name} width="300" className="product-img default" />
              <img src={product.imageHover} alt={product.name} width="300" className="product-img hover" />
              {product.badge && <p className="showcase-badge">{product.badge}</p>}
              <div className="showcase-actions">
                <button className="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>
                <button className="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>
                <button className="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                {product.category}
              </a>
              <a href="#">
                <h3 className="showcase-title">{product.name}</h3>
              </a>
              <div className="showcase-rating">
                {product.rating.map((star, i) => (
                  <ion-icon
                    name={star > 0 ? 'star' : 'star-outline'}
                    key={i}
                  ></ion-icon>
                ))}
              </div>
              <div className="price-box">
                <p className="price">${product.price.toFixed(2)}</p>
                <del>${product.oldPrice.toFixed(2)}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
