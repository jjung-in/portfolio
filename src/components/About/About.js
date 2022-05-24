import React from "react";
import "./About.scss";

function About() {
  return (
    <div id="about">
      <div className="container about_inwrap">
        <div className="about_box">
          <div className="left_wrap">
            <div className="info_box">
              <p className="myimg"></p>
              <ul>
                <li>
                  <span className="title">Name</span>
                  <span className="value">고정인 / Go jungin</span>
                </li>
                <li>
                  <span className="title">Birth</span>
                  <span className="value">1997.12.23</span>
                </li>
                <li>
                  <span className="title">Email</span>
                  <span className="value">4292in@naver.com</span>
                </li>
                <li>
                  <span className="title">Call</span>
                  <span className="value">010-5069-4292</span>
                </li>
                <li>
                  <span className="title">Github</span>
                  <span className="value">
                    <a href="https://github.com/jjung-in" target="_blank">
                      https://github.com/jjung-in
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="skill_box">
              <span className="title">Skills</span>
              <ul className="mini">
                <li>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>jQuery</span>
                  <span>SCSS</span>
                  <span>React</span>
                </li>
                <li>
                  <span>Spring</span>
                  <span>Spring Boot</span>
                  <span>Orcle</span>
                  <span>MySQL</span>
                </li>
                <li>
                  <span>JAVA</span>
                  <span>C</span>
                  <span>C++</span>
                </li>
              </ul>
              <ul className="big">
                <li>
                  <p>
                    <span className="skill-img html"></span>
                    <span className="skill-text">HTML</span>
                  </p>
                  <p>
                    <span className="skill-img css"></span>
                    <span className="skill-text">CSS</span>
                  </p>
                  <p>
                    <span className="skill-img js"></span>
                    <span className="skill-text">JavaScript</span>
                  </p>
                  <p>
                    <span className="skill-img jq"></span>
                    <span className="skill-text">jQuery</span>
                  </p>
                  <p>
                    <span className="skill-img scss"></span>
                    <span className="skill-text">SCSS</span>
                  </p>
                  <p>
                    <span className="skill-img react"></span>
                    <span className="skill-text">React</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="skill-img spring"></span>
                    <span className="skill-text">Spring</span>
                  </p>
                  <p>
                    <span className="skill-img springb"></span>
                    <span className="skill-text">Spring Boot</span>
                  </p>
                  <p>
                    <span className="skill-img oracle"></span>
                    <span className="skill-text">Oracle</span>
                  </p>
                  <p>
                    <span className="skill-img mysql"></span>
                    <span className="skill-text">MySQL</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="skill-img java"></span>
                    <span className="skill-text">JAVA</span>
                  </p>
                  <p>
                    <span className="skill-img c"></span>
                    <span className="skill-text">C</span>
                  </p>
                  <p>
                    <span className="skill-img cpp"></span>
                    <span className="skill-text">C++</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="right_wrap">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula dui, pellentesque et sapien non, vestibulum efficitur diam. Vestibulum vel faucibus nibh. Vivamus vitae ex aliquam, posuere massa ut, interdum est. Morbi at neque sit amet dolor faucibus vestibulum.</p>
            <br />
            <p>Quisque ultrices, justo sed accumsan venenatis, libero sem aliquet lacus, sit amet lacinia massa tellus ac ante. Sed sed varius diam. Suspendisse nulla est, consectetur at velit ut, condimentum cursus neque.</p>
            <br />
            <p> Sed aliquet gravida nulla, vel aliquam purus facilisis sed. Maecenas ligula velit, hendrerit nec ante ut, blandit tempus lacus. Suspendisse potenti. Phasellus congue, velit sed fermentum aliquet, lorem dui ultrices neque, eget sagittis eros ipsum non quam. Aenean eget blandit lorem. Integer fermentum ut felis vitae facilisis.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
