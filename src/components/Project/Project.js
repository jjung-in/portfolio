import React from "react";
import { Link } from "react-router-dom";
import "./Project.scss";
import portfolio_preview from "../../assets/img_portfolio/thumbnail.png";
import oramyun_preview from "../../assets/img_oramyun/thumbnail.png";
import doran_preview from "../../assets/img_doran/thumbnail.png";
import chic_preview from "../../assets/img_chic/thumbnail.png";
import paris_preview from "../../assets/img_paris/thumbnail.png";
import crain_preview from "../../assets/img_crain/thumbnail.png";

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
              <img src={portfolio_preview} alt="portfolio" />
              <div className="text_wrap">
                <Link to="/project/portfolio">
                  <span>포트폴리오</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={oramyun_preview} alt="oramyun" />
              <div className="text_wrap">
                <Link to="/project/oramyun">
                  <span>오늘의 라면</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={doran_preview} alt="doran-doran" />
              <div className="text_wrap">
                <Link to="/project/doran">
                  <span>도란도란</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={chic_preview} alt="chic-chic" />
              <div className="text_wrap">
                <Link to="/project/chic">
                  <span>칰칰폭폭</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={paris_preview} alt="paris" />
              <div className="text_wrap">
                <Link to="/project/paris">
                  <span>파리바게트</span>
                </Link>
              </div>
            </li>
            <li>
              <img src={crain_preview} alt="crain" />
              <div className="text_wrap">
                <Link to="/project/crain">
                  <span>크레인 고장진단 시스템</span>
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
