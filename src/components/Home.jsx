import React from 'react'
import './css/style.css';
import './css/style-prefix.css'
import NotificationToast from './fragments/Notification';
import Header from './fragments/Header';
import Banner from './fragments/Banner';
import Categories from './fragments/Categories';
import Product from './fragments/Product';
import Testimonials from './fragments/Testimonials';
import Blog from './fragments/Blog';
import Footer from './fragments/Footer';

function Home() {
  return (
    <div>
       <div className='overlay' data-overlay></div>
       <NotificationToast/>
       <Header/>
       <main>
         <Banner/>
         <Categories/>
         <Product/>
         <Testimonials/>
         <Blog/>
       </main>
       <Footer/>
    </div>
  )
}

export default Home
