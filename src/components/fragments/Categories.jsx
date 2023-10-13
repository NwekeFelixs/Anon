import React from 'react';
import '../css/style.css';
import dress from '../img/icons/dress.svg'
import coat from '../img/icons/coat.svg'
import glasses from '../img/icons/glasses.svg'
import shorts from '../img/icons/shorts.svg'
import tee from '../img/icons/tee.svg'
import jacket from '../img/icons/jacket.svg'
import hat from '../img/icons/hat.svg'
import watch from '../img/icons/watch.svg'


const categories = [
  {
    name: 'Dress & Frock',
    imageSrc: dress,
    amount: 53,
  },
  {
    name: 'Winter wear',
    imageSrc: coat,
    amount: 58,
  },
  {
    name: 'Glasses & lens',
    imageSrc: glasses,
    amount: 68,
  },
  {
    name: 'Shorts & jeans',
    imageSrc: shorts,
    amount: 84,
  },
  {
    name: 'T-shirts',
    imageSrc: tee,
    amount: 35,
  },
  {
    name: 'Jacket',
    imageSrc: jacket,
    amount: 16,
  },
  {
    name: 'Watch',
    imageSrc: watch,
    amount: 27,
  },
  {
    name: 'Hat & caps',
    imageSrc: hat,
    amount: 39,
  },
];

function Categories() {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {categories.map((category, index) => (
            <div className="category-item" key={index}>
              <div className="category-img-box">
                <img src={category.imageSrc} alt={category.name} width="30" />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">{category.name}</h3>
                  <p className="category-item-amount">({category.amount})</p>
                </div>
                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
