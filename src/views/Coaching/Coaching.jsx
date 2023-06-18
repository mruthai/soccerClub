import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../container/Footer/Footer'
import { images } from '../../constants'
import './Coaching.css'


const Coaching = () => {
  
  return (
    <div>
      <Navbar />
      <div className="app__coaching flex__center section__padding" id="coaching">
        <div className="app__coaching-content flex__center">
          <h1 className="headtext__playfair text__coaching">Coaching</h1>
        </div>
        <div> 

        </div>

      </div>
      <Footer />
    </div>
  );
};


export default Coaching