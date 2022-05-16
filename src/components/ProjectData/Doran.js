import React from "react";
import "./ProjectData.scss";
import ImgModal from "../ImgModal/ImgModal";
import doran from "../../assets/img_chic/thumbnail.png";

function Doran({ clickedImg, setClickedImg, imgClick }) {
  return (
    <div id="projectData">
      <div className="function_wrap">
        <ul>
          <b>회원</b>
          <li>회원가입</li>
          <li>로그인ㆍ로그아웃</li>
          <li className="other">회원정보 수정</li>
          <li className="other">관심주제 설정</li>
          <li className="other">가입 그룹 조회</li>
        </ul>
        <ul>
          <b>관리자</b>
          <li className="other">카테고리 등록</li>
          <li className="other">카테고리 삭제</li>
        </ul>
        <ul>
          <b>메인</b>
          <li className="other">최신 그룹 조회</li>
          <li className="other">추천 그룹 조회</li>
          <li className="other">카테고리별 피드 조회</li>
        </ul>
        <ul>
          <b>검색</b>
          <li>전체 그룹 검색</li>
          <li>전체 피드 검색</li>
          <li>태그별 전체 피드 검색</li>
        </ul>
        <ul>
          <b>그룹</b>
          <li>전체 그룹 조회</li>
          <li>카테고리별 그룹 조회</li>
          <li>그룹 생성ㆍ수정ㆍ삭제</li>
          <li>그룹 가입 신청ㆍ승인ㆍ탈퇴</li>
          <li>그룹 회원 조회</li>
        </ul>
        <ul>
          <b>피드</b>
          <li>피드 작성ㆍ수정ㆍ삭제</li>
          <li>댓글 작성ㆍ수정ㆍ삭제</li>
          <li>피드 좋아요</li>
          <li>피드 검색 (내용, 작성자, 태그)</li>
          <li>피드 공개 수준별 조회</li>
          <li>인기 피드 조회</li>
        </ul>
        <ul>
          <b>채팅</b>
          <li>1:1 웹 소켓 채팅</li>
          <li>채팅 알림</li>
        </ul>
        <ul>
          <b>알림</b>
          <li>그룹 가입 승인 요청 알림</li>
          <li>그룹 가입 승인 취소ㆍ탈퇴 알림</li>
          <li>게시물 좋아요 알림</li>
          <li>게시물 댓글 알림</li>
        </ul>
        <ul>
          <b>기타</b>
          <li>로그인 권한 체크</li>
          <li>관리자 권한 체크</li>
        </ul>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="회원가입" onClick={imgClick} />
        <div className="text_box">
          <b>회원가입</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="로그인ㆍ로그아웃" onClick={imgClick} />
        <div className="text_box">
          <b>로그인ㆍ로그아웃</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={doran} alt="메인 페이지" onClick={imgClick} />
        <div className="text_box">
          <b>메인 페이지</b>
        </div>
      </div>
      <ImgModal clickedImg={clickedImg} setClickedImg={setClickedImg} />
    </div>
  );
}

export default Doran;
