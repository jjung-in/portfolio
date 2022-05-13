import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./More.scss";
import portfolio_preview from "../assets/img_portfolio/portfolio_preview.png";
import oramyun_preview from "../assets/img_oramyun/oramyun_preview.png";
import doran_preview from "../assets/img_doran/doran_preview.png";
import chic_preview from "../assets/img_chic/chic_preview.png";
import paris_preview from "../assets/img_paris/paris_preview.png";
import crain_preview from "../assets/img_crain/crain_preview.png";

function More() {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <div id="more">
      <div className="container">
        <h2>PROJECT</h2>
        <button
          className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
          onClick={handleTop} // 버튼 클릭시 함수 호출
        ></button>
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
  );
}

export default More;
