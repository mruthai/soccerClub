import React from 'react';

import { images } from "../../constants"

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__playfair"> {title} </p>
    <img src={ images.pitch } alt="pitch" className="pitch__img" />
  </div>

);

export default SubHeading;
