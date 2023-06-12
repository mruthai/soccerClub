import React from 'react';

import { images } from "../../constants";
import './Programs.css';

const Programs = () => (
<div className="app__programs flex__center section__padding" id="programs">
    <div className="app__program-content flex__center">
      <h1 className="headtext__playfair program-title">Programs</h1>
    </div>

    <div className="app__programs-content flex__center">

      <div className="app__programs-content_rec">
        <h1 className="subheadtext__playfair-content"> Recreational</h1>
        <img src={images.pitch} alt="about_pitch" className="pitch__img"/>

        <p className="p__program-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ducimus nemo error tempora laudantium officiis perspiciatis modi libero quisquam, reprehenderit placeat fugit cum nesciunt 
        facilis sed itaque nisi maiores, dignissimos, consequatur voluptatibus!  </p>
        <div className="app__programs-button">
        <button href="#" type="button" className="custom__button">Know More</button>
        </div>
        
      </div>

      <div className="app__programs-content_competitive">
        <h1 className="subheadtext__playfair-content"> Competitive</h1>
        <img src={images.pitch} alt="about_pitch" className="pitch__img" />

        <p className="p__program-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae quod rerum fugiat, ipsam, 
        ad laboriosam ratione quaerat, molestiae vero nihil magnam? Esse iusto repellendus fugiat dolores ducimus? Porro sapiente reiciendis perferendis,
         qui exercitationem magni? Odit repudiandae in architecto.</p>
         <div className="app__programs-button">
        <button href="#" type="button" className="custom__button">Know More</button>
        </div>
      </div>
      
    </div>
  </div>
);

export default Programs;
