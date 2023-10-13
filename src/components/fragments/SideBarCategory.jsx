import React from 'react';
import '../css/style.css'
import dress from '../img/icons/dress.svg'
import coat from '../img/icons/coat.svg'
import glasses from '../img/icons/glasses.svg'
import shorts from '../img/icons/shorts.svg'
import tee from '../img/icons/tee.svg'
import jacket from '../img/icons/jacket.svg'
import hat from '../img/icons/hat.svg'
import watch from '../img/icons/watch.svg'
import jewelry from '../img/icons/jewelry.svg'
import perfume from '../img/icons/perfume.svg'
import cosmetics from '../img/icons/cosmetics.svg'
import shoes from '../img/icons/shoes.svg'
import bag from '../img/icons/bag.svg'
import { IoAddOutline, IoCloseOutline, IoRemoveOutline } from 'react-icons/io5';


const SidebarCategories = () => {
  const sidebarCategories = [
    {
      title: 'Clothes',
      icon: dress,
      items: [
        { name: 'Shirt', stock: 300 },
        { name: 'shorts & jeans', stock: 60 },
        { name: 'jacket', stock: 50 },
        { name: 'dress & frock', stock: 87 },
      ],
    },
    {
      title: 'Footwear',
      icon: shoes,
      items: [
        { name: 'Sports', stock: 45 },
        { name: 'Formal', stock: 75 },
        { name: 'Casual', stock: 35 },
        { name: 'Safety Shoes', stock: 26 },
      ],
    },
    {
      title: 'Jewelry',
      icon: jewelry,
      items: [
        { name: 'Earrings', stock: 46 },
        { name: 'Couple Rings', stock: 73 },
        { name: 'Necklace', stock: 61 },
      ],
    },
    {
      title: 'Perfume',
      icon: perfume,
      items: [
        { name: 'Clothes Perfume', stock: 12 },
        { name: 'Deodorant', stock: 60 },
        { name: 'jacket', stock: 50 },
        { name: 'dress & frock', stock: 87 },
      ],
    },
    {
      title: 'Cosmetics',
      icon: cosmetics,
      items: [
        { name: 'Shampoo', stock: 68 },
        { name: 'Sunscreen', stock: 46 },
        { name: 'Body Wash', stock: 79 },
        { name: 'Makeup Kit', stock: 23 },
      ],
    },
    {
      title: 'Glasses',
      icon: glasses,
      items: [
        { name: 'Sunglasses', stock: 50 },
        { name: 'Lenses', stock: 48 },
      ],
    },
    {
      title: 'Bags',
      icon: bag,
      items: [
        { name: 'Shopping Bag', stock: 62 },
        { name: 'Gym Backpack', stock: 35 },
        { name: 'Purse', stock: 80 },
        { name: 'Wallet', stock: 75 },
      ],
    },
  ];

  return (
    <div className="sidebar has-scrollbar" data-mobile-menu>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <IoCloseOutline/>
          </button>
        </div>
        <ul className="sidebar-menu-category-list">
          {sidebarCategories.map((category, index) => (
            <li className="sidebar-menu-category" key={index}>
              <button className="sidebar-accordion-menu" data-accordion-btn>
                <div className="menu-title-flex">
                  <img src={category.icon} alt={category.title} width="20" height="20" className="menu-title-img" />
                  <p className="menu-title">{category.title}</p>
                </div>
                <div>
                  <IoAddOutline/>
                  <IoRemoveOutline/>
                </div>
              </button>
              <ul className="sidebar-submenu-category-list" data-accordion>
                {category.items.map((item, subIndex) => (
                  <li className="sidebar-submenu-category" key={subIndex}>
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">{item.name}</p>
                      <data value={item.stock} className="stock" title="Available Stock">{item.stock}</data>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarCategories;
