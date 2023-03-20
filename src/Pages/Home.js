import Carousel from '../Components/Carousel';
import Cards from '../Components/Cards';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import React from 'react'

export default function Home() {
  return (
    <div>
      <Navbar/>
    <Carousel/>
    <Cards />
    <Footer/>
    </div>
  )
}
