import React from "react";
import "./ProjectData.scss";
import join from "../../assets/img_paris/join.gif";
import login from "../../assets/img_paris/login.gif";
import main from "../../assets/img_paris/main.gif";
import main2 from "../../assets/img_paris/main2.gif";
import reserve from "../../assets/img_paris/reserve.gif";
import mypage from "../../assets/img_paris/mypage.gif";

function Paris() {
  return (
    <div id="projectData">
      <div className="descritpion_wrap">
        <img src={join} alt="회원가입" />
        <div className="text_box">
          <b>회원가입</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={login} alt="로그인" />
        <div className="text_box">
          <b>로그인</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={main} alt="메인페이지" />
        <div className="text_box">
          <b>메인 페이지</b>
          <ul>
            <li>예약 가능한 케이크 제품을 확인할 수 있습니다.</li>
            <li>카테고리를 클릭하면 카테고리별 케이크를 확인할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={main2} alt="모달창" />
        <div className="text_box">
          <b>메인 페이지 모달창</b>
          <ul>
            <li>제품을 클릭하면 해당 제품의 상세 정보가 담긴 모달창이 나타납니다.</li>
            <li>픽업 예약하기 버튼을 클릭하면 예약 페이지로 이동합니다.</li>
            <li>예약 페이지에서도 제품의 상세 정보를 확인할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={reserve} alt="예약하기" />
        <div className="text_box">
          <b>예약 페이지</b>
          <ul>
            <li>예약 페이지에서 초 개수, 픽업 날짜 등의 옵션을 선택합니다.</li>
            <li>픽업 날짜는 오늘로부터 3~10일 후까지 선택할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={mypage} alt="마이페이지" />
        <div className="text_box">
          <b>마이 페이지</b>
          <ul>
            <li>마이 페이지에서 예약 현황을 조회하고, 예약 취소를 할 수 있습니다.</li>
            <li>예약일 하루 전부터는 예약 취소가 불가합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Paris;
