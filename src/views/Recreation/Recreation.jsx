import React from 'react'
import './Recreation.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../container/Footer/Footer'
import FootCalendar from '../../components/Calendar/FootCalendar'

const Recreation = () => {
  return (
    <div className="app__recreation">
      <Navbar />
      <div className="app__recreation section__padding" id="recreation">
        <div className="app__recreaction-content">

          <h1 className="headtext__playfair text__competitive flex__center"> Recreation </h1>
          <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Enim consequatur aspernatur unde, voluptatibus beatae non porro libero odit perspiciatis 
        sint deserunt architecto ullam dolorum? Ad porro magni perspiciatis expedita blanditiis voluptas, 
        nesciunt voluptatem ea quaerat voluptate sapiente rerum hic vitae!</p>
        </div>
      <FootCalendar
      events=''
      />
      </div>
      <Footer />
    </div>
  )
}

export default Recreation