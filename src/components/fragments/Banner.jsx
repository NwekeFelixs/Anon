import React from 'react';
import '../css/style.css'
import bannerImg1 from '../img/banner-1.jpg'
import bannerImg2 from '../img/banner-2.jpg'
import bannerImg3 from '../img/banner-3.jpg'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <img src={bannerImg1} alt="women's latest fashion sale" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>
              <h2 className="banner-title">Women's latest fashion sale</h2>
              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>
          <div className="slider-item">
            <img src={bannerImg2} alt="modern sunglasses" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">Trending accessories</p>
              <h2 className="banner-title">Modern sunglasses</h2>
              <p className="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>
          <div className="slider-item">
            <img src={bannerImg3} alt="new fashion summer sale" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">Sale Offer</p>
              <h2 className="banner-title">New fashion summer sale</h2>
              <p className="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
