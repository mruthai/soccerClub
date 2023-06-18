import React from 'react';
import Competitive from './Competitive.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../container/Footer/Footer'



const Competitive = () => (
  <div>
    <Navbar />
    <div className="app__header app__wrapper section__padding" id="competitive">
      <div className="app__wrapper_info">
        <h1>Competitive</h1>
      </div>
      <div className="app__wrapper_img">

      </div>
      <Footer />
    </div>
  </div>
);

export default Competitive;