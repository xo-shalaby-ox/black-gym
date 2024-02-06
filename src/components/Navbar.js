import React, { useState } from "react";
import logo from "../images/logoo.png";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [link, setlink] = useState("main");
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li className={link === "main" ? "activation" : ""}>
          <Link
            onClick={() => setlink("main")}
            to="main"
            smooth={true}
            duration={1000}
          >
            Header
          </Link>
        </li>
        <li className={link === "features" ? "activation" : ""}>
          <Link
            onClick={() => setlink("features")}
            to="features"
            smooth={true}
            duration={1000}
          >
            Features
          </Link>
        </li>
        <li className={link === "offer" ? "activation" : ""}>
          <Link
            onClick={() => setlink("offer")}
            to="offer"
            smooth={true}
            duration={1000}
          >
            Offer
          </Link>
        </li>
        <li className={link === "about" ? "activation" : ""}>
          <Link
            onClick={() => setlink("about")}
            to="about"
            smooth={true}
            duration={1000}
          >
            About
          </Link>
        </li>
        <li className={link === "contact" ? "activation" : ""}>
          <Link
            onClick={() => setlink("contact")}
            to="contact"
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
