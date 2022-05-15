import React from "react";
import "./ProjectData.scss";
import ImgModal from "../ImgModal/ImgModal";
import responsive from "../../assets/img_megabox/responsive.gif";

function Megabox({ clickedImg, setClickedImg, imgClick }) {
  return (
    <div id="projectData">
      <div className="text_wrap">
        <ul>
          <li>화면 크기에 따라 변하는 반응형 웹</li>
          <li>Swiper 플러그인을 사용하여 반응형 슬라이드 구현</li>
        </ul>
      </div>
      <div className="descritpion_wrap">
        <img src={responsive} alt="반응형" onClick={imgClick} />
        <div className="text_box">
          <b>반응형 웹</b>
        </div>
      </div>
      <ImgModal clickedImg={clickedImg} setClickedImg={setClickedImg} />
    </div>
  );
}

export default Megabox;
