
import './Program.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../container/Footer/Footer'
import { images } from '../../constants'
import React from 'react'

const Program = () => {
  return (
    <div >
      <Navbar />
      <div className="app__program flex__center section__padding" id="program">
        <div className="app__program-content flex__center">
          <h1 className="headtext__playfair text__program ">Programs</h1>
        </div>
        <div className="app__program-content flex__center">

          <div className="app__program-content_rec">
            <h1 className="subheadtext__playfair-content"> Recreational</h1>
            <img src={images.pitch} alt="about_pitch" className="pitch__img" />

            <p className="p__program-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ducimus nemo error tempora laudantium officiis perspiciatis modi libero quisquam, reprehenderit placeat fugit cum nesciunt
              facilis sed itaque nisi maiores, dignissimos, consequatur voluptatibus!  </p>
            <p className="p__program-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ducimus nemo error tempora laudantium officiis perspiciatis modi libero quisquam, reprehenderit placeat fugit cum nesciunt
              facilis sed itaque nisi maiores, dignissimos, consequatur voluptatibus!  </p>
            <div className="app__program-button">
             
            </div>

          </div>

          <div className="app__program-content_competitive">
            <h1 className="subheadtext__playfair-content"> Competitive(Travel)</h1>
            <img src={images.pitch} alt="about_pitch" className="pitch__img" />

            <p className="p__program-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae quod rerum fugiat, ipsam,
              ad laboriosam ratione quaerat, molestiae vero nihil magnam? Esse iusto repellendus fugiat dolores ducimus? Porro sapiente reiciendis perferendis,
              qui exercitationem magni? Odit repudiandae in architecto.</p>
            <p className="p__program-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae quod rerum fugiat, ipsam,
              ad laboriosam ratione quaerat, molestiae vero nihil magnam? Esse iusto repellendus fugiat dolores ducimus? Porro sapiente reiciendis perferendis,
              qui exercitationem magni? Odit repudiandae in architecto.</p>

            <div className="app__programs-button">
              
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}


export default Program