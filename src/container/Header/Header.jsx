import React from 'react';

import {images} from "../../constants";

import { SubHeading } from "../../components";

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    <SubHeading title="It's more than kicking a ball"/>
    <h1 className="app__header-h1">Collaborate, Problem-solve, Achieve</h1>
    <p className="p__opensans" style={{ margin: '2rem 0'}}> Experience the joy of teamwork, the rush of scoring goals, and the camaraderie that comes with playing soccer. Join our passionate community of players who share a love for the sport and a competitive spirit.</p>
    </div>
    <div className="app__wrapper_img">
    <img src={images.welcome} alt="img" />
    </div>
  </div>
);

export default Header;
