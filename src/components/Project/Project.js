import React from "react";
import { Link } from "react-router-dom";
import "./Project.scss";
import sample_img from "../../assets/sample_img.png";

function Project() {
  return (
    <div id="project">
      <div className="container project_inwrap">
        <h2>PROJECT</h2>
        <div className="contents_wrap">
          <Link to="/" className="more">더보기</Link>
          <ul>
            <li>
              <img src={sample_img} alt="project1" />
              <Link to="/">
                <span>프로젝트명</span>
              </Link>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <Link to="/">
                <span>프로젝트명</span>
              </Link>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <Link to="/">
                <span>프로젝트명</span>
              </Link>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <Link to="/">
                <span>프로젝트명</span>
              </Link>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <Link to="/">
                <span>프로젝트명</span>
              </Link>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <Link to="/">
                <span>프로젝트명</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
