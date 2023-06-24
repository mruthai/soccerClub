import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; /* import icons react library */
import { MdOutlineSportsSoccer } from "react-icons/md"; /* import icons react library */
import { Link } from "react-router-dom"
import images from "../../constants/images";


import "./Navbar.css";

// Hooks for viewing menu drop down and viewing the menu on small screen. 
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className="app__navbar-links dropdown" onMouseLeave={() => setIsOpen(false)}>
        <li className="p__opensans"> <Link to="/"> Home </Link> </li>
        <li className="p__opensans dropdown-link" onMouseEnter={toggleDropdown}> <Link to="/programs"> Programs </Link>
          {isOpen && (
            <ul className="dropdown-menu">
              <li className="p__opensans dropdown-text"> <Link to="/competitive"> Competitive</Link> </li>
              <li className="p__opensans dropdown-text"> <Link to="/recreation"> Recreation</Link> </li>
            </ul >
          )}
        </li>
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
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"> <Link to="/competitive"> Competitive </Link> </li>
                <li className="p__opensans dropdown-text"> <Link to="/recreation"> Recreation</Link> </li>
              </ul>
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