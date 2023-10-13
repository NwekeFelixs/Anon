import React from 'react';
import shampoo from '../img/products/shampoo.jpg'
import jewelry from '../img/products/jewellery-1.jpg'
import '../css/style.css'

const products = [
  {
    name: 'Shampoo, Conditioner & Facewash Packs',
    rating: [1, 2, 3],
    description:
      'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor',
    price: 150.0,
    oldPrice: 200.0,
    image: shampoo,
    sold: 20,
    available: 40,
    countdown: {
      days: 360,
      hours: 24,
      minutes: 59,
      seconds: 0,
    },
  },
  {
    name: 'Rose Gold Diamonds Earring',
    rating: [1, 2, 3],
    description:
      'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor',
    price: 1990.0,
    oldPrice: 2000.0,
    image: jewelry,
    sold: 15,
    available: 40,
    countdown: {
      days: 360,
      hours: 24,
      minutes: 59,
      seconds: 0,
    },
  },
];

const ProductFeature = () => {
  return (
    <div className="product-featured">
      <h2 className="title">Deal of the day</h2>
      <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          {products.map((product, index) => (
            <div className="showcase" key={index}>
              <div className="showcase-banner">
                <img src={product.image} alt={product.name} className="showcase-img" />
              </div>
              <div className="showcase-content">
                <div className="showcase-rating">
                  {product.rating.map((star, i) => (
                    <ion-icon name={star > 0 ? 'star' : 'star-outline'} key={i}></ion-icon>
                  ))}
                </div>
                <a href="#">
                  <h3 className="showcase-title">{product.name}</h3>
                </a>
                <p className="showcase-desc">{product.description}</p>
                <div className="price-box">
                  <p className="price">${product.price.toFixed(2)}</p>
                  <del>${product.oldPrice.toFixed(2)}</del>
                </div>
                <button className="add-cart-btn">add to cart</button>
                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      already sold: <b>{product.sold}</b>
                    </p>
                    <p>
                      available: <b>{product.available}</b>
                    </p>
                  </div>
                  <div className="showcase-status-bar"></div>
                </div>
                <div className="countdown-box">
                  <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                  <div className="countdown">
                    <div className="countdown-content">
                      <p className="display-number">{product.countdown.days}</p>
                      <p className="display-text">Days</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">{product.countdown.hours}</p>
                      <p className="display-text">Hours</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">{product.countdown.minutes}</p>
                      <p className="display-text">Min</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">{product.countdown.seconds}</p>
                      <p className="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
