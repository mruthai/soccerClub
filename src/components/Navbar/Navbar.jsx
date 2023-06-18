import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { Link } from "react-router-dom"
import images from "../../constants/images";

import Program from "../../views/Program/Program"


import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"> <Link to="/"> Home </Link> </li>
        <li className="p__opensans"> <Link to="/programs"> Programs </Link></li>
        
        <li className="p__opensans"> <Link to="/resources"> Resources </Link> </li>
        <li className="p__opensans"> <Link to="/coaching"> Coaching</Link></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans" title="log in">Log in</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineSportsSoccer color="#fff" fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"> <Link to="/"> Home </Link> </li>
              <li className="p__opensans"> <Link to="/programs"> Programs </Link></li>
              <li className="p__opensans"> <Link to="/resources"> Resources </Link> </li>
              <li className="p__opensans"> <Link to="/coaching"> Coaching</Link></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;