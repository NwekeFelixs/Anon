import React from 'react';
import '../css/style.css'
import newArrialImg1 from '../img/products/clothes-1.jpg'
import newArrialImg2 from '../img/products/clothes-2.jpg'
import newArrialImg3 from '../img/products/clothes-3.jpg'
import newArrialImg4 from '../img/products/shirt-1.jpg'
import newArrialImg5 from '../img/products/jacket-5.jpg'
import newArrialImg6 from '../img/products/jacket-1.jpg'
import newArrialImg7 from '../img/products/sports-3.jpg'
import newArrialImg8 from '../img/products/watch-3.jpg'

import trendingImg1 from '../img/products/shirt-2.jpg'
import trendingImg2 from '../img/products/shoe-2.jpg'
import trendingImg3 from '../img/products/shoe-4.jpg'
import trendingImg4 from '../img/products/jacket-6.jpg'
import trendingImg5 from '../img/products/jewellery-2.jpg'
import trendingImg6 from '../img/products/shorts-1.jpg'
import trendingImg7 from '../img/products/party-wear-2.jpg'
import trendingImg8 from '../img/products/watch-4.jpg'

const products = {
  newArrivals: [
    {
      name: 'Relaxed Short Full Sleeve T-Shirt',
      category: 'Clothes',
      price: 45.0,
      oldPrice: 12.0,
      image: newArrialImg1,
    },
    {
      name: 'Girls Pink Embro Design Top',
      category: 'Clothes',
      price: 61.0,
      oldPrice: 9.0,
      image: newArrialImg2,
    },
    {
      name: 'Black Floral Wrap Midi Skirt',
      category: 'Clothes',
      price: 76.0,
      oldPrice: 25.0,
      image: newArrialImg3,
    },
    {
      name: 'Pure Garment Dyed Cotton Shirt',
      category: "Men's Fashion",
      price: 68.0,
      oldPrice: 31.0,
      image: newArrialImg4,
    },

    {
      name: 'MEN Yarn Fleece Full-Zip Jacket',
      category: "winter wear",
      price: 68.0,
      oldPrice: 31.0,
      image: newArrialImg5,
    },
    {
      name: 'MEN Yarn Fleece Full-Zip Jacket',
      category: "winter wear",
      price: 68.0,
      oldPrice: 31.0,
      image: newArrialImg6,
    },
    {
      name: 'MEN Yarn Fleece Full-Zip Jacket',
      category: "winter wear",
      price: 68.0,
      oldPrice: 31.0,
      image: newArrialImg7,
    },
    {
      name: 'MEN Yarn Fleece Full-Zip Jacket',
      category: "winter wear",
      price: 68.0,
      oldPrice: 31.0,
      image: newArrialImg8,
    },
    // Add more products here
  ],
  trending: [
    {
      name: 'Running & Trekking Shoes - White',
      category: 'Sports',
      price: 49.0,
      oldPrice: 15.0,
      image: trendingImg1,
    },
    {
      name: 'Trekking & Running Shoes - Black',
      category: 'Sports',
      price: 78.0,
      oldPrice: 36.0,
      image: trendingImg2,
    },
    {
      name: 'Trekking & Running Shoes - Black',
      category: 'Sports',
      price: 78.0,
      oldPrice: 36.0,
      image: trendingImg3,
    },
    {
      name: 'Trekking & Running Shoes - Black',
      category: 'Sports',
      price: 78.0,
      oldPrice: 36.0,
      image: trendingImg4,
    },
    {
      name: 'Trekking & Running Shoes - Black',
      category: 'Sports',
      price: 78.0,
      oldPrice: 36.0,
      image: trendingImg5,
    },
    {
      name: 'Trekking & Running Shoes - Black',
      category: 'Sports',
      price: 78.0,
      oldPrice: 36.0,
      image: trendingImg6,
    },
    {
      name: 'Trekking & Running Shoes - Black',
      category: 'Sports',
      price: 78.0,
      oldPrice: 36.0,
      image: trendingImg7,
    },
    {
      name: 'Trekking & Running Shoes - Black',
      category: 'Sports',
      price: 78.0,
      oldPrice: 36.0,
      image: trendingImg8,
    },
    // Add more trending products here
  ],
  topRated: [
    {
      name: 'Pocket Watch Leather Pouch',
      category: 'Watches',
      price: 50.0,
      oldPrice: 34.0,
      image: newArrialImg7,
    },
    {
      name: 'Silver Deer Heart Necklace',
      category: 'Jewellery',
      price: 84.0,
      oldPrice: 30.0,
      image: newArrialImg2,
    },
    {
      name: 'Silver Deer Heart Necklace',
      category: 'Jewellery',
      price: 84.0,
      oldPrice: 30.0,
      image: trendingImg3,
    },
    {
      name: 'Silver Deer Heart Necklace',
      category: 'Jewellery',
      price: 84.0,
      oldPrice: 30.0,
      image: trendingImg8,
    },
    {
      name: 'Silver Deer Heart Necklace',
      category: 'Jewellery',
      price: 84.0,
      oldPrice: 30.0,
      image: newArrialImg5,
    },
    {
      name: 'Silver Deer Heart Necklace',
      category: 'Jewellery',
      price: 84.0,
      oldPrice: 30.0,
      image: trendingImg2,
    },
    {
      name: 'Silver Deer Heart Necklace',
      category: 'Jewellery',
      price: 84.0,
      oldPrice: 30.0,
      image: newArrialImg8,
    },
    {
      name: 'Silver Deer Heart Necklace',
      category: 'Jewellery',
      price: 84.0,
      oldPrice: 30.0,
      image: trendingImg7,
    },
    // Add more top-rated products here
  ],
};

const ProductMinimal = () => {
  return (
    <div className="product-minimal">
      <div className="product-showcase">
        <h2 className="title">New Arrivals</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            {products.newArrivals.map((product, index) => (
              <div className="showcase" key={index}>
                <a href="#" className="showcase-img-box">
                  <img src={product.image} alt={product.name} width="70" className="showcase-img" />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.name}</h4>
                  </a>
                  <a href="#" className="showcase-category">
                    {product.category}
                  </a>
                  <div className="price-box">
                    <p className="price">${product.price.toFixed(2)}</p>
                    <del>${product.oldPrice.toFixed(2)}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="product-showcase">
        <h2 className="title">Trending</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            {products.trending.map((product, index) => (
              <div className="showcase" key={index}>
                <a href="#" className="showcase-img-box">
                  <img src={product.image} alt={product.name} width="70" className="showcase-img" />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.name}</h4>
                  </a>
                  <a href="#" className="showcase-category">
                    {product.category}
                  </a>
                  <div className="price-box">
                    <p className="price">${product.price.toFixed(2)}</p>
                    <del>${product.oldPrice.toFixed(2)}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="product-showcase">
        <h2 className="title">Top Rated</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            {products.topRated.map((product, index) => (
              <div className="showcase" key={index}>
                <a href="#" className="showcase-img-box">
                  <img src={product.image} alt={product.name} width="70" className="showcase-img" />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{product.name}</h4>
                  </a>
                  <a href="#" className="showcase-category">
                    {product.category}
                  </a>
                  <div className="price-box">
                    <p className="price">${product.price.toFixed(2)}</p>
                    <del>${product.oldPrice.toFixed(2)}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMinimal;
