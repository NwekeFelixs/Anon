import React, { useState } from 'react';
import img from '../img/products/jewellery-1.jpg'
import '../css/style.css';
import {IoCloseOutline, } from 'react-icons/io5';

const NotificationToast = () => {
  const [closed, setClosed] = useState(false);

  const closeToast = () => {
    setClosed(true);
  };

  if (closed) {
    return null;
  }

  return (
    <div className="notification-toast" data-toast>
      <button className="toast-close-btn" data-toast-close onClick={closeToast}>
        <IoCloseOutline/>
      </button>

      <div className="toast-banner">
        <img src={img} alt="Rose Gold Earrings" width="80" height="70" />
      </div>

      <div className="toast-detail">
        <p className="toast-message">Someone in new just bought</p>
        <p className="toast-title">Rose Gold Earrings</p>
        <p className="toast-meta">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
};

export default NotificationToast;
