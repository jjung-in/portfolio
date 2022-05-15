import React from "react";
import "./ProjectData.scss";
import desktop from "../../assets/img_megabox/desktop.gif";
import tablet from "../../assets/img_megabox/tablet.gif";
import mobile from "../../assets/img_megabox/mobile.gif";
import responsive from "../../assets/img_megabox/responsive.gif";

function Megabox() {
  return (
    <div id="projectData">
      <div id="projectData">
        <div className="text_wrap">
          <ul>
            <li>화면 크기에 따라 변하는 반응형 웹</li>
            <li>Swiper 플러그인을 사용하여 반응형 슬라이드 구현</li>
          </ul>
        </div>
        <div className="descritpion_wrap">
          <img src={responsive} alt="반응형" />
          <div className="text_box">
            <b>반응형 웹</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Megabox;
