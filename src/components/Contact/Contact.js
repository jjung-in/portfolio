import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

function Contact() {
  return (
    <div id="contact">
      <div className="container contact_inwrap">
        <h2>CONTACT</h2>
        <div className="info_wrap">
          <div className="text_wrap">
            <h6>E-MAIL</h6>
            <p>4292in@naver.com</p>
          </div>
          <div className="text_wrap">
            <h6>CALL</h6>
            <p>010-5069-4292</p>
          </div>
          <div className="text_wrap">
            <h6>GITHUB</h6>
            <p>
              jung-in{" "}
              <a href="https://github.com/jjung-in" target="_blank">
                GITHUB
              </a>
            </p>
          </div>
          <div className="text_wrap">
            <h6>RESUME</h6>
            <p>
              jung-in{" "}
              <a href="/" target="_blank">
                RESUME
              </a>
            </p>
          </div>
        </div>
        <footer id="footer">Copyright 2022. Jungin Go All rights reserved.</footer>
      </div>
    </div>
  );
}

export default Contact;
