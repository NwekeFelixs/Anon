import React, { useState } from 'react';
import '../css/style.css';
import '../css/style-prefix.css'
import newsletterImg from '../img/newsletter.png'
import {IoCloseOutline, } from 'react-icons/io5';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`modal ${isOpen ? 'opened' : ''}`} data-modal>

      <div className="modal-close-overlay" data-modal-overlay onClick={closeModal}></div>

      <div className="modal-content">
        <button className="modal-close-btn" data-modal-close onClick={closeModal}>
          <IoCloseOutline/>
        </button>

        <div className="newsletter-img">
          <img src={newsletterImg} alt="subscribe newsletter" width="400" height="400" />
        </div>

        <div className="newsletter">1
          <form action="#">
            <div className="newsletter-header">
              <h3 className="newsletter-title">Subscribe Newsletter.</h3>
              <p className="newsletter-desc">
                Subscribe to <b>Anon</b> to get the latest product and discount updates.
              </p>
            </div>
            <input type="email" name="email" className="email-field" placeholder="Email Address" required />
            <button type="submit" className="btn-newsletter">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
