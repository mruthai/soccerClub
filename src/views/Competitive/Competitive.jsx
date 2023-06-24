import React from 'react'
import './Competitive.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../container/Footer/Footer'


const Competitive = () => {
  return (
    <div>
    <Navbar />
    <div className="app__competitive section__padding" id="competitive">
      <div className="app__competitive-content">
        <h1 className="headtext__playfair text__competitive flex__center">Competitive</h1>
      </div>
      <div className="headtext__playfair text__competitive">
        <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Enim consequatur aspernatur unde, voluptatibus beatae non porro libero odit perspiciatis 
        sint deserunt architecto ullam dolorum? Ad porro magni perspiciatis expedita blanditiis voluptas, 
        nesciunt voluptatem ea quaerat voluptate sapiente rerum hic vitae!</p>
      </div>
    </div>
      <Footer />
  </div>
  )
}

export default Competitive