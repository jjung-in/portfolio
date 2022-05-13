import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header2() {
  return (
    <header id="header">
      <div className="container header_inwrap">
        <h1>
          <Link to="/">GO JUNG-IN</Link>
        </h1>
      </div>
    </header>
  );
}

export default Header2;
