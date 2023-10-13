import React, { useState } from 'react';
import { IoMenuOutline, IoCloseOutline, IoAddOutline, IoRemoveOutline, IoSearchOutline, IoPersonAddOutline, IoHeartOutline, IoBagHandleOutline, IoHomeOutline, IoGridOutline, IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from 'react-icons/io5';
import logo from '../img/logo/logo.svg'
import headerBanner1 from '../img/electronics-banner-1.jpg'
import headerBanner2 from '../img/mens-banner.jpg'
import headerBanner3 from '../img/womens-banner.jpg'
import headerBanner4 from '../img/electronics-banner-2.jpg'
import '../css/style.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
    setOverlayActive(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOverlayActive(false);
  };

  const toggleAccordion = (index) => {
    // Handle accordion behavior
  };

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="#" className="social-link">
                <IoLogoFacebook/>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IoLogoTwitter/>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IoLogoInstagram/>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IoLogoLinkedin/>
              </a>
            </li>
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b> This Week Order Over - $55
            </p>
          </div>
          <div className="header-top-actions">
            <select name="currency">
              <option value="usd">USD &dollar;</option>
              <option value="eur">EUR &euro;</option>
            </select>
            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Espa&ntilde;ol</option>
              <option value="fr">Fran&ccedil;ais</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <img src={logo} alt="Anon's logo" width="120" height="36" />
          </a>
          <div className="header-search-container">
            <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
            <button className="search-btn">
              <IoSearchOutline/>
            </button>
          </div>
          <div className="header-user-actions">
            <button className="action-btn">
              <IoPersonAddOutline/>
            </button>
            <button className="action-btn">
              <IoHeartOutline/>
              <span className="count">0</span>
            </button>
            <button className="action-btn">
              <IoBagHandleOutline/>
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>
      <nav className={`desktop-navigation-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Categories
              </a>
              <div className="dropdown-panel">
                {/* Electronics */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Desktop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Laptop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Camera</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Tablet</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Headphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src={headerBanner1} alt="headphone collection" width="250" height="119" />
                    </a>
                  </li>
                </ul>
                {/* Men's */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Men's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src={headerBanner2} alt="men's fashion" width="250" height="119" />
                    </a>
                  </li>
                </ul>
                {/* Women's */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Women's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Perfume</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Cosmetics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Bags</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src={headerBanner3} alt="women's fashion" width="250" height="119" />
                    </a>
                  </li>
                </ul>
                {/* More Categories */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart Watch</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart TV</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Keyboard</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Mouse</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Microphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img src={headerBanner4} alt="mouse collection" width="250" height="119" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Men's
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Shirt</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Shorts & Jeans</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Safety Shoes</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Wallet</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Women's
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Dress & Frock</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Makeup Kit</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Jewelry
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Couple Rings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Bracelets</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Perfume
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Clothes Perfume</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Flower Fragrance</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mobile-bottom-navigation">
        <button className="action-btn" onClick={openMobileMenu}>
          <IoMenuOutline />
        </button>
        <button className="action-btn">
          <IoBagHandleOutline/>
          <span className="count">0</span>
        </button>
        <button className="action-btn">
          <IoHomeOutline/>
        </button>
        <button className="action-btn">
          <IoHeartOutline/>
          <span className="count">0</span>
        </button>
        <button className="action-btn" onClick={openMobileMenu}>
          <IoGridOutline/>
        </button>
      </div>
      <nav className={`mobile-navigation-menu has-scrollbar ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" onClick={closeMobileMenu}>
            <IoCloseOutline />
          </button>
        </div>
        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">
              Home
            </a>
          </li>
          <li className="menu-category">
            <button
              className="accordion-menu"
              data-accordion-btn
              onClick={() => toggleAccordion(0)}
            >
              <p className="menu-title">Men's</p>
              <div>
                {mobileMenuOpen ? (
                  <IoRemoveOutline className="remove-icon" />
                ) : (
                  <IoAddOutline className="add-icon" />
                )}
              </div>
            </button>
            <ul className={`submenu-category-list ${mobileMenuOpen ? 'active' : ''}`}>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shirt
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shorts & Jeans
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Safety Shoes
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Wallet
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button
              className="accordion-menu"
              data-accordion-btn
              onClick={() => toggleAccordion(1)}
            >
              <p className="menu-title">Women's</p>
              <div>
                {mobileMenuOpen ? (
                  <IoRemoveOutline className="remove-icon" />
                ) : (
                  <IoAddOutline className="add-icon" />
                )}
              </div>
            </button>
            <ul className={`submenu-category-list ${mobileMenuOpen ? 'active' : ''}`}>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Dress & Frock
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Makeup Kit
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button
              className="accordion-menu"
              data-accordion-btn
              onClick={() => toggleAccordion(2)}
            >
              <p className="menu-title">Jewelry</p>
              <div>
                {mobileMenuOpen ? (
                  <IoRemoveOutline className="remove-icon" />
                ) : (
                  <IoAddOutline className="add-icon" />
                )}
              </div>
            </button>
            <ul className={`submenu-category-list ${mobileMenuOpen ? 'active' : ''}`}>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Couple Rings
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Bracelets
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button
              className="accordion-menu"
              data-accordion-btn
              onClick={() => toggleAccordion(3)}
            >
              <p className="menu-title">Perfume</p>
              <div>
                {mobileMenuOpen ? (
                  <IoRemoveOutline className="remove-icon" />
                ) : (
                  <IoAddOutline className="add-icon" />
                )}
              </div>
            </button>
            <ul className={`submenu-category-list ${mobileMenuOpen ? 'active' : ''}`}>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Clothes Perfume
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Deodorant
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Flower Fragrance
                </a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Air Freshener
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <a href="#" className="menu-title">
              Blog
            </a>
          </li>
          <li className="menu-category">
            <a href="#" className="menu-title">
              Hot Offers
            </a>
          </li>
        </ul>
      </nav>
      {overlayActive && <div className="overlay" onClick={closeMobileMenu}></div>}
    </header>
  );
};

export default Header;
