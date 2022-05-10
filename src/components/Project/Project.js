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
          <Link to="/project" className="more">
            더보기
          </Link>
          <ul>
            <li>
              <img src={sample_img} alt="project1" />
              <div className="text_wrap">
                <Link to="/">
                  <span>도란도란</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <div className="text_wrap">
                <Link to="/">
                  <span>칙칙폭폭</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <div className="text_wrap">
                <Link to="/">
                  <span>파리바게트</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <div className="text_wrap">
                <Link to="/">
                  <span>크레인 고장진단 시스템</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <div className="text_wrap">
                <Link to="/">
                  <span>프로젝트명</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={sample_img} alt="project1" />
              <div className="text_wrap">
                <Link to="/">
                  <span>프로젝트명</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
