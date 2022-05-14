import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./Header.scss";

function Header() {
  return (
    <header id="header">
      <div className="container header_inwrap">
        <h1>
          <Link to="/">GO JUNG-IN</Link>
        </h1>
        <nav id="nav">
          <ul>
            <li>
              <Link to="home" spy={true} smooth={true}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="project" spy={true} smooth={true}>
                PROJECT
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
