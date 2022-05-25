import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import Header2 from "../components/Header/Header2";
import BackBtn from "../components/BackBtn/BackBtn";
import TopBtn from "../components/TopBtn/TopBtn";
import portfolio_preview from "../assets/img_portfolio/thumbnail.png";
import oramyun_preview from "../assets/img_oramyun/thumbnail.png";
import todo_preview from "../assets/img_todolist/thumbnail.png";
import doran_preview from "../assets/img_doran/thumbnail.png";
import chic_preview from "../assets/img_chic/thumbnail.png";
import paris_preview from "../assets/img_paris/thumbnail.png";
import megabox_preview from "../assets/img_megabox/thumbnail.png";
import crain_preview from "../assets/img_crain/thumbnail.png";
import Todolist from "../components/ProjectData/Todolist";
import Doran from "../components/ProjectData/Doran";
import Chic from "../components/ProjectData/Chic";
import Paris from "../components/ProjectData/Paris";
import Megabox from "../components/ProjectData/Megabox";
import Carin from "../components/ProjectData/Crain";

function Detail() {
  /* 이미지 모달 */
  const [clickedImg, setClickedImg] = useState(null);

  const imgClick = (event) => {
    console.log(event.target.src);
    setClickedImg(event.target.src);
  };

  /* 프로젝트 정보 */
  const projectData = {
    portfolio: {
      title: "Jungin's 포트폴리오",
      previewImg: portfolio_preview,
      viewLink: "https://jjung-in.github.io/portfolio",
      githubLink: "https://github.com/jjung-in/portfolio",
      description: "개인 포트폴리오 용도로 제작한 웹사이트입니다. React ... 개인 포트폴리오 용도로 제작한 웹사이트입니다. React ...",
      period: "2022.05",
      people: "1명",
      position: ["프론트엔드"],
      skill: "React, JavaScript, SCSS",
      projectData: <Doran clickedImg={clickedImg} setClickedImg={setClickedImg} imgClick={imgClick} />,
    },
    oramyun: {
      title: "오늘의 라면",
      previewImg: oramyun_preview,
      // viewLink: "https://jjung-in.github.io/clone-megabox",
      githubLink: "https://github.com/jjung-in/clone-oramyun",
      description: "리액트 + 사이트 선택 이유",
      period: "2022.05",
      people: "1명",
      position: ["프론트엔드"],
      skill: "React, JavaScript, SCSS",
      projectData: <Doran clickedImg={clickedImg} setClickedImg={setClickedImg} imgClick={imgClick} />,
    },
    todolist: {
      title: "투두리스트",
      previewImg: todo_preview,
      githubLink: "https://github.com/jjung-in/react-todolist",
      noteLink: "https://excellent-peak-d3a.notion.site/React-To-Do-List-37bc9040246f4e69a793a6f15beb82c1",
      description: "React 학습 차원에서 간단하게 구현한 투두리스트 앱입니다. 컴포넌트를 분리하여 재사용이 가능하도록 했고, useState, useEffect 등의 Hooks을 통해 상태 관리를 했습니다.",
      period: "2022.04",
      people: "1명",
      position: ["프론트엔드"],
      skill: "React",
      projectData: <Todolist clickedImg={clickedImg} setClickedImg={setClickedImg} imgClick={imgClick} />,
    },
    doran: {
      title: "도란도란",
      previewImg: doran_preview,
      githubLink: "https://github.com/jhatab/DORAN",
      description: "멀티캠퍼스 지능형 웹 서비스 풀스택 개발 과정에서 파이널 프로젝트로 'Vertical SNS'를 제작했습니다. 특정 주제에 관심있는 사람들끼리 모여 그룹을 만들고 관심 분야를 공유하는 SNS입니다. 네이버 밴드의 기능을 참고하여 구현했습니다.",
      period: "2022.02.16 ~ 2022.03.20",
      people: "3명",
      position: ["프론트엔드, 백엔드", "- 회원ㆍ그룹ㆍ게시물 서비스 구현", "- 채팅ㆍ알림ㆍ검색 서비스 구현"],
      skill: "HTML, CSS, JavaScript, jQuery, Spring Boot, MySQL",
      projectData: <Doran clickedImg={clickedImg} setClickedImg={setClickedImg} imgClick={imgClick} />,
    },
    chic: {
      title: "칰칰폭폭",
      previewImg: chic_preview,
      githubLink: "https://github.com/lee-goeun/semi-project",
      description: "멀티캠퍼스 지능형 웹 서비스 풀스택 개발 과정에서 세미 프로젝트로 '배달 공유 커뮤니티' 사이트를 제작했습니다. 이 프로젝트는 배달료와 최소 금액에 대한 비용 부담을 줄이고 정보 공유를 하기 위한 목적으로 개발했습니다.",
      period: "2022.01.21 ~ 2022.02.14",
      people: "3명",
      position: ["프론트엔드, 백엔드", "- 후기게시판 서비스 구현", "- 모집게시판 서비스 구현 (목록 페이지)"],
      skill: "HTML, CSS, JavaScript, jQuery, Spring Framework, MySQL",
      projectData: <Chic clickedImg={clickedImg} setClickedImg={setClickedImg} imgClick={imgClick} />,
    },
    paris: {
      title: "케이크 픽업 예약 서비스",
      previewImg: paris_preview,
      githubLink: "https://github.com/jjung-in/multi-mini-project",
      description: "멀티캠퍼스 지능형 웹 서비스 풀스택 개발 과정에서 미니 프로젝트로 '케이크 픽업 예약' 사이트를 제작했습니다. 파리바게트 홈페이지를 참고했으며, 케이크 및 예약 옵션을 선택하여 케이크를 픽업 예약하는 서비스를 구현했습니다.",
      period: "(F) 2021.12.15 ~ 17 / (B) 2022.01.11 ~ 13",
      people: "1명",
      position: ["프론트엔드, 백엔드"],
      skill: "HTML, CSS, JavaScript, jQuery, Spring Framework, MySQL",
      projectData: <Paris clickedImg={clickedImg} setClickedImg={setClickedImg} imgClick={imgClick} />,
    },
    megabox: {
      title: "메가박스",
      previewImg: megabox_preview,
      viewLink: "https://jjung-in.github.io/clone-megabox",
      githubLink: "https://github.com/jjung-in/clone-megabox",
      description: "HTML, CSS, JavaScript의 기본 개념을 익힌 후, 웹 개발에 대한 이해를 높이고자 [WEBSTORYBOY - 메가박스 사이트 만들기] 강의를 보며 따라 만든 사이트입니다.",
      period: "2021.10",
      people: "1명",
      position: ["프론트엔드"],
      skill: "HTML, CSS, JavaScript, jQuery",
      projectData: <Megabox clickedImg={clickedImg} setClickedImg={setClickedImg} imgClick={imgClick} />,
    },
    crain: {
      title: "크레인 고장진단 시스템",
      previewImg: crain_preview,
      description: "대학교 졸업 프로젝트로 기업과 연계하여 '크레인 고장진단 시스템'을 개발했습니다. 이 시스템은 스마트 센서를 통해 크레인의 이상징후를 인지하고 적시에 대응할 수 있도록 실시간 모니터링 기능을 제공하는 시스템입니다.",
      period: "2018.09 ~ 2019.04",
      people: "3명",
      position: ["프론트엔드, 백엔드 - 모니터링 화면 구현", "머신러닝"],
      skill: "JSP, HTML, CSS, JavaScript, jQuery, MySQL, Python",
      projectData: <Carin clickedImg={clickedImg} setClickedImg={setClickedImg} imgClick={imgClick} />,
    },
  };

  const { name } = useParams();
  const project = projectData[name];

  return (
    <div id="detail">
      <Header2 />
      <div className="container detail_inwrap">
        <TopBtn />
        <BackBtn />
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
              {project.noteLink && (
                <li>
                  <a href={project.noteLink} target="_blank" rel="noopener noreferrer">
                    NOTE
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
            <p className="position">
              <span className="name"># 역할</span>
              <span className="value">
                {project.position.map((element, index) => {
                  return <span key={index}>{element}</span>;
                })}
              </span>
            </p>
            <p>
              <span className="name"># 사용기술</span>
              <span className="value">{project.skill}</span>
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
