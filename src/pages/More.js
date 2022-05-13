import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./More.scss";
import Header2 from "../components/Header/Header2";
import portfolio_preview from "../assets/img_portfolio/portfolio_preview.png";
import oramyun_preview from "../assets/img_oramyun/oramyun_preview.png";
import doran_preview from "../assets/img_doran/doran_preview.png";
import chic_preview from "../assets/img_chic/chic_preview.png";
import paris_preview from "../assets/img_paris/paris_preview.png";
import crain_preview from "../assets/img_crain/crain_preview.png";

function More() {
  /* 프로젝트 정보 */
  const projectList = [
    {
      title: "포트폴리오",
      img: portfolio_preview,
      link: "portfolio",
    },
    {
      title: "오늘의 라면",
      img: oramyun_preview,
      link: "oramyun",
    },
    {
      title: "도란도란",
      img: doran_preview,
      link: "doran",
    },
    {
      title: "칰칰폭폭",
      img: chic_preview,
      link: "chic",
    },
    {
      title: "파리바게트",
      img: paris_preview,
      link: "paris",
    },
    {
      title: "크레인 고장진단 시스템",
      img: crain_preview,
      link: "crain",
    },
  ];

  /* top 버튼 */
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
      <Header2 />
      <div className="container">
        <h2>PROJECT</h2>
        <button
          className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
          onClick={handleTop} // 버튼 클릭시 함수 호출
        ></button>
        <ul>
          {projectList.map((element, index) => {
            return (
              <li key={index}>
                <img src={element.img} alt={element.title} />
                <div className="text_wrap">
                  <Link to={`/project/${element.link}`}>
                    <span>{element.title}</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default More;
