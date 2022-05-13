import React from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import Header2 from "../components/Header/Header2";
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
      description: "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
    },
    oramyun: {
      title: "오늘의 라면",
      previewImg: oramyun_preview,
      description: "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
    },
    doran: {
      title: "도란도란",
      previewImg: doran_preview,
      description: "전래동화의 주인공",
    },
    chic: {
      title: "칰칰폭폭",
      previewImg: chic_preview,
      description: "전래동화의 주인공",
    },
    paris: {
      title: "파리바게트",
      previewImg: paris_preview,
      description: "전래동화의 주인공",
    },
    crain: {
      title: "크레인 고장진단 시스템",
      previewImg: crain_preview,
      description: "전래동화의 주인공",
    },
  };

  const { name } = useParams();
  const project = projectData[name];

  return (
    <div id="detail">
      <Header2 />
      <div className="container">
        <h2>{project.title}</h2>
        <div className="top_wrap">
          <img src={project.previewImg} alt={project.title} />
          <div className="summary_box">요약</div>
        </div>
        <div className="bottopm_wrap">따로 빼기 - 프로젝트마다 만들기</div>
      </div>
    </div>
  );
}

export default Detail;
