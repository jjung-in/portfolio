import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.scss";
import Header2 from "../components/Header/Header2";
import TopBtn from "../components/TopBtn/TopBtn";
import portfolio_preview from "../assets/img_portfolio/portfolio_preview.png";
import oramyun_preview from "../assets/img_oramyun/oramyun_preview.png";
import doran_preview from "../assets/img_doran/doran_preview.png";
import chic_preview from "../assets/img_chic/chic_preview.png";
import paris_preview from "../assets/img_paris/paris_preview.png";
import crain_preview from "../assets/img_crain/crain_preview.png";

function Detail() {
  const projectData = {
    portfolio: {
      title: "Jungin's 포트폴리오",
      previewImg: portfolio_preview,
      viewLink: "https://jjung-in.github.io/portfolio",
      githubLink: "https://github.com/jjung-in/portfolio",
      description: "개인 포트폴리오 용도로 제작한 웹사이트입니다. React ... 개인 포트폴리오 용도로 제작한 웹사이트입니다. React ...",
      period: "2022.05 ~ ",
      people: "1명",
      position: "프론트엔드",
      skill: "React, JavaScript, SCSS",
      function: ["반응형", "스크롤", "스크롤"],
    },
    oramyun: {
      title: "오늘의 라면",
      previewImg: oramyun_preview,
      description: "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
      function: ["반응형", "스크롤", "스크롤"],
    },
    doran: {
      title: "도란도란",
      previewImg: doran_preview,
      description: "전래동화의 주인공",
      function: ["반응형", "스크롤", "스크롤"],
    },
    chic: {
      title: "칰칰폭폭",
      previewImg: chic_preview,
      description: "전래동화의 주인공",
      function: ["반응형", "스크롤", "스크롤"],
    },
    paris: {
      title: "파리바게트",
      previewImg: paris_preview,
      description: "전래동화의 주인공",
      function: ["반응형", "스크롤", "스크롤"],
    },
    crain: {
      title: "크레인 고장진단 시스템",
      previewImg: crain_preview,
      description: "대학교 졸업 프로젝트로 기업과 연계하여 '크레인 고장진단 시스템'을 개발했습니다. 이 시스템은 스마트 센서를 통해 크레인의 이상징후를 인지하고 적시에 대응할 수 있도록 실시간 모니터링 기능을 제공하는 시스템입니다.",
      period: "2018.09 ~ 2019.04",
      people: "3명",
      position: "모니터링 화면 구현(프론트엔드, 백엔드), 머신러닝",
      skill: "JSP, HTML, CSS, JavaScript, jQuery, MySQL, Python",
      function: ["반응형", "스크롤", "스크롤"],
    },
  };

  const { name } = useParams();
  const project = projectData[name];

  /* 뒤로가기 버튼 */
  const navigate = useNavigate();

  return (
    <div id="detail">
      <Header2 />
      <div className="container">
        <TopBtn />
        <button
          className="backBtn"
          onClick={() => {
            navigate("/project");
          }}></button>
        <h2>{project.title}</h2>
        <div className="top_wrap">
          <img src={project.previewImg} alt={project.title} />
          <div className="summary_box">
            <ul>
              {project.viewLink && (
                <li>
                  <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
                    VIEW
                  </a>
                </li>
              )}
              {project.githubLink && (
                <li>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GITHUB
                  </a>
                </li>
              )}
            </ul>
            <p className="description">{project.description}</p>
            <p>
              <span className="name"># 기간</span>
              <span className="value">{project.period}</span>
            </p>
            <p>
              <span className="name"># 인원</span>
              <span className="value">{project.people}</span>
            </p>
            <p>
              <span className="name"># 역할</span>
              <span className="value">{project.position}</span>
            </p>
            <p>
              <span className="name"># 사용기술</span>
              <span className="value">{project.skill}</span>
            </p>
            <p className="function">
              <span className="name"># 주요기능</span>
              <span className="value">
                {project.function.map((element, index) => {
                  return <span key={index}>{element}</span>;
                })}
              </span>
            </p>
          </div>
        </div>
        <div className="bottopm_wrap">따로 빼기 - 프로젝트마다 만들기</div>
      </div>
    </div>
  );
}

export default Detail;
