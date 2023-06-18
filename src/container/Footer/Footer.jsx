import React from 'react';
import { images } from '../../constants'
import './Footer.css';
import { FiFacebook } from 'react-icons/fi';
const Footer = () => (
  <div className="app__footer section__padding">
    <h1>footer</h1>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Address: 123 Main St. Ridgewell</p>
          <p className="p__opensans"> Number: 123-123-4567</p>
          <p className="p__opensans">email: contact@rigdewell.united</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={ images.logo } alt="footer-logo" />
        <p className="p__opensans">Come one, Come Collaborate</p>
        <img src={ images.pitch } className="pitch__img" style={{ margintTop: 15}} alt="pitch" />
        <div className="app__footer-links_icons">
          <FiFacebook />
        </div>
      </div>
      <div className="app__footer-links_resources">
          <h1 className="app__footer-headtext">Resources</h1>
          <ul>
            <li><a href="#resourcepage" className="p__opensans">League</a> </li>
            <li><a href="#resourcepage" className="p__opensans">Inquiry</a> </li>
          </ul>
      </div>
    </div>
      <div className="footer__copyright">
        <p className="p__opensans">2023 Char-ger Club. All Rights Reserved </p>
      </div>
  </div>
);

export default Footer;
