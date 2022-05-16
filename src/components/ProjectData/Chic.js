import React from "react";
import "./ProjectData.scss";
import ImgModal from "../ImgModal/ImgModal";
import doran from "../../assets/img_chic/thumbnail.png";

function Chic({ clickedImg, setClickedImg, imgClick }) {
  return (
    <div id="projectData">
      <div className="function_wrap">
        <ul>
          <b>회원</b>
          <li className="other">회원가입</li>
          <li className="other">로그인ㆍ로그아웃</li>
          <li className="other">회원정보 수정</li>
        </ul>
        <ul>
          <b>관리자</b>
          <li className="other">전체 회원 조회</li>
          <li className="other">회원 강제 탈퇴</li>
        </ul>
        <ul>
          <b>메인</b>
          <li className="other">사이트 소개</li>
          <li className="other">오시는 길 페이지</li>
          <li className="other">가이드 페이지</li>
        </ul>
        <ul>
          <b>채팅</b>
          <li className="other">1:N 웹 소켓 채팅</li>
        </ul>
        <ul>
          <b>모집게시판</b>
          <li>지역별 게시물 조회</li>
          <li>게시물 통합 검색</li>
          <li className="other">게시물 음성 검색</li>
          <li className="other">게시물 작성ㆍ수정ㆍ삭제</li>
          <li className="other">게시물 참여하기</li>
          <li>마감 임박 및 마감 상태 표시</li>
        </ul>
        <ul>
          <b>후기게시판</b>
          <li>전체 게시물 조회</li>
          <li>게시물 주제별 검색</li>
          <li>게시물 페이징</li>
          <li>게시물 작성ㆍ수정ㆍ삭제</li>
          <li>댓글 작성ㆍ수정ㆍ삭제</li>
          <li>조회수 중복 방지 (쿠키 사용)</li>
        </ul>
        <ul>
          <b>기타</b>
          <li>로그인 권한 체크</li>
        </ul>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="회원가입" onClick={imgClick} />
        <div className="text_box">
          <b>시작 페이지 → 회원가입</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="로그인" onClick={imgClick} />
        <div className="text_box">
          <b>로그인ㆍ로그아웃</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="마이페이지" onClick={imgClick} />
        <div className="text_box">
          <b>마이페이지</b>
          <ul>
            <li>회원정보 수정</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="메인페이지" onClick={imgClick} />
        <div className="text_box">
          <b>메인ㆍ오시는 길ㆍ가이드 페이지</b>
          <ul>
            <li>예약 가능한 케이크 제품을 확인할 수 있습니다.</li>
            <li>카테고리를 클릭하면 카테고리별 케이크를 확인할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="모집게시판" onClick={imgClick} />
        <div className="text_box">
          <b>모집게시판</b>
          <ul>
            <li>제품을 클릭하면 해당 제품의 상세 정보가 담긴 모달창이 나타납니다.</li>
            <li>픽업 예약하기 버튼을 클릭하면 예약 페이지로 이동합니다.</li>
            <li>예약 페이지에서도 제품의 상세 정보를 확인할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="예약하기" onClick={imgClick} />
        <div className="text_box">
          <b>후기게시판</b>
          <ul>
            <li>예약 페이지에서 초 개수, 픽업 날짜 등의 옵션을 선택합니다.</li>
            <li>픽업 날짜는 오늘로부터 3~10일 후까지 선택할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="로그인 권한 체크" onClick={imgClick} />
        <div className="text_box">
          <b>로그인 권한 체크</b>
          <ul>
            <li>마이 페이지에서 예약 현황을 조회하고, 예약 취소를 할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <ImgModal clickedImg={clickedImg} setClickedImg={setClickedImg} />
    </div>
  );
}

export default Chic;
