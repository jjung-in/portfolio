import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [isUrl, setIsUrl] = useState(true);
  console.log(isUrl);

  useEffect(() => {
    if (window.location.pathname === "/portfolio/project") {
      setIsUrl(false);
    }
  }, []);

  return (
    <header id="header">
      <div className="container header_inwrap">
        <h1>
          <Link to="/">GO JUNG-IN</Link>
        </h1>
        {isUrl && (
          <nav id="nav">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECT</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
