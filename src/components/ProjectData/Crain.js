import React from "react";
import "./ProjectData.scss";
import crain01 from "../../assets/img_crain/crain01.png";
import crain02 from "../../assets/img_crain/crain02.png";
import crain03 from "../../assets/img_crain/crain03.png";

function Carin() {
  return (
    <div id="projectData">
      <div className="text_wrap">
        <ul>
          <li>화면 크기에 따라 변하는 반응형 웹으로 구현</li>
          <li>데이터 분석 결과 시각화 및 데이터 성향에 따른 다양한 차트 제공</li>
          <li>크레인의 결혐 유무 및 위치를 파악하는 학습 모델 개발 (오픈소스 활용)</li>
        </ul>
      </div>
      <div className="img_wrap">
        <img src={crain01} alt="크레인" />
        <img src={crain02} alt="크레인" />
        <img src={crain03} alt="크레인" />
      </div>
    </div>
  );
}

export default Carin;
