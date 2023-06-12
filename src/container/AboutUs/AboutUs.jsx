import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";



const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.osu} alt="osu letter" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__playfair"> About Us</h1>
        <img src={images.pitch} alt="about_pitch" className="pitch__img"/>
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ducimus nemo error tempora laudantium officiis perspiciatis modi libero quisquam, reprehenderit placeat fugit cum nesciunt 
        facilis sed itaque nisi maiores, dignissimos, consequatur voluptatibus!  </p>
        
      </div>

      <div className="app__aboutus-content_cornerflag flex__center">
        
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__playfair"> Our History</h1>
        <img src={images.pitch} alt="about_pitch" className="pitch__img" />
        <p className="p__opensans"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae quod rerum fugiat, ipsam, 
        ad laboriosam ratione quaerat, molestiae vero nihil magnam? Esse iusto repellendus fugiat dolores ducimus? Porro sapiente reiciendis perferendis,
         qui exercitationem magni? Odit repudiandae in architecto.</p>
      </div>
      
    </div>
  </div>
);

export default AboutUs;
