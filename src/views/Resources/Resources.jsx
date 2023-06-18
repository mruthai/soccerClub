import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../container/Footer/Footer'
import './Resources.css'

const Resources = () => {
 
  return (
    <div id="resources">
      <Navbar />
      <div className="app__resources-title flex__center section_padding">
        <h1 className="headtext__playfair text__resources">Resources</h1>
      </div>
      <div className="app__resources-content section__padding" >
        <div class="app__resources-competitive">
          <h2 className="app__resources-title">Competitive Questions</h2>
          </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Resources