import React from "react";
import { Link } from "react-router-dom";
import "./More.scss";
import Header2 from "../components/Header/Header2";
import BackBtn from "../components/BackBtn/BackBtn";
import TopBtn from "../components/TopBtn/TopBtn";
import portfolio_preview from "../assets/img_portfolio/thumbnail.png";
import oramyun_preview from "../assets/img_oramyun/thumbnail.png";
import todo_preview from "../assets/img_todolist/thumbnail.png";
import doran_preview from "../assets/img_doran/thumbnail.png";
import chic_preview from "../assets/img_chic/thumbnail.png";
import paris_preview from "../assets/img_paris/thumbnail.png";
import crain_preview from "../assets/img_crain/thumbnail.png";
import megabox_preview from "../assets/img_megabox/thumbnail.png";

function More() {
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
      title: "투두리스트",
      img: todo_preview,
      link: "todolist",
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
      title: "메가박스",
      img: megabox_preview,
      link: "megabox",
    },
    {
      title: "크레인 고장진단 시스템",
      img: crain_preview,
      link: "crain",
    },
  ];

  return (
    <div id="more">
      <Header2 />
      <div className="container">
        <h2>PROJECT</h2>
        <BackBtn />
        <TopBtn />
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
