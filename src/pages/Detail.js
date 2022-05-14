import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.scss";
import Header2 from "../components/Header/Header2";
import TopBtn from "../components/TopBtn/TopBtn";
import portfolio_preview from "../assets/img_portfolio/portfolio_preview.png";
import oramyun_preview from "../assets/img_oramyun/oramyun_preview.png";
import doran_preview from "../assets/img_doran/doran_preview.png";
import chic_preview from "../assets/img_chic/chic_preview.png";
import paris_preview from "../assets/img_paris/thumbnail.png";
import crain_preview from "../assets/img_crain/crain_preview.png";
import Paris from "../components/ProjectData/Paris";
import Carin from "../components/ProjectData/Crain";

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
      title: "케이크 픽업 예약 서비스",
      previewImg: paris_preview,
      githubLink: "https://github.com/jjung-in/multi-mini-project",
      description: "멀티캠퍼스 지능형 웹 서비스 풀스택 개발 과정에서 미니 프로젝트로 '케이크 픽업 예약' 사이트를 제작했습니다. 파리바게트 홈페이지를 참고했으며, 케이크 및 예약 옵션을 선택하여 케이크를 픽업 예약하는 서비스를 구현했습니다.",
      period: "(F) 2021.12.15 ~ 17 / (B) 2022.01.11 ~ 13",
      people: "1명",
      position: "프론트엔드, 백엔드",
      skill: "HTML, CSS, JavaScript, jQuery, Spring Framework, MySQL",
      function: ["반응형", "스크롤", "스크롤"],
      projectData: <Paris />,
    },
    crain: {
      title: "크레인 고장진단 시스템",
      previewImg: crain_preview,
      description: "대학교 졸업 프로젝트로 기업과 연계하여 '크레인 고장진단 시스템'을 개발했습니다. 이 시스템은 스마트 센서를 통해 크레인의 이상징후를 인지하고 적시에 대응할 수 있도록 실시간 모니터링 기능을 제공하는 시스템입니다.",
      period: "2018.09 ~ 2019.04",
      people: "3명",
      position: "모니터링 화면 구현(프론트엔드, 백엔드), 머신러닝",
      skill: "JSP, HTML, CSS, JavaScript, jQuery, MySQL, Python",
      function: ["화면 크기에 따라 변하는 반응형 웹으로 구현", "데이터 분석 결과 시각화 및 데이터 성향에 따른 다양한 차트 제공", "크레인의 결함 유무 및 위치를 파악하는 학습 모델 개발 (오픈소스 활용)"],
      projectData: <Carin />,
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
        <div className="bottopm_wrap">
          <h3>세부 내용</h3>
          {project.projectData}
        </div>
      </div>
    </div>
  );
}

export default Detail;
