import React from "react";
import "./ProjectData.scss";
import ImgModal from "../ImgModal/ImgModal";
import join from "../../assets/img_doran/join.gif";
import login from "../../assets/img_doran/login.gif";
import main from "../../assets/img_doran/main.gif";
import category from "../../assets/img_doran/category.gif";
import mypage from "../../assets/img_doran/mypage.gif";
import group from "../../assets/img_doran/group.gif";
import group_join from "../../assets/img_doran/group_join.gif";
import group_setting from "../../assets/img_doran/group_setting.gif";
import search from "../../assets/img_doran/search.gif";

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
        <img src={join} alt="회원가입" onClick={imgClick} />
        <div className="text_box">
          <b>회원가입</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={login} alt="로그인ㆍ로그아웃" onClick={imgClick} />
        <div className="text_box">
          <b>로그인ㆍ로그아웃</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={main} alt="메인 페이지" onClick={imgClick} />
        <div className="text_box">
          <b>메인 페이지</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={category} alt="카테고리 페이지" onClick={imgClick} />
        <div className="text_box">
          <b>카테고리 페이지</b>
          <ul>
            <li>카테고리 페이지에서 그룹 카테고리를 생성ㆍ삭제할 수 있습니다.</li>
            <li>관리자만 카테고리 페이지에 들어갈 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={mypage} alt="마이 페이지" onClick={imgClick} />
        <div className="text_box">
          <b>마이 페이지</b>
          <ul>
            <li>마이페이지에서 가입 그룹을 확인하고 회원 정보를 수정할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={group} alt="그룹 페이지" onClick={imgClick} />
        <div className="text_box">
          <b>그룹 페이지 ①</b>
          <ul>
            <li>전체 그룹과 카테고리별 그룹을 조회할 수 있습니다.</li>
            <li>그룹을 생성할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={group_join} alt="그룹 페이지" onClick={imgClick} />
        <div className="text_box">
          <b>그룹 페이지 ②</b>
          <ul>
            <li>가입하기 버튼을 누르면 가입 신청이 되며, 그룹 관리자에게 알림이 전송됩니다.</li>
            <li>이미 가입된 회원은 가입하기 버튼대신 그룹 설정 버튼이 나타납니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={group_join} alt="그룹 페이지" onClick={imgClick} />
        <div className="text_box">
          <b>그룹 페이지 ③</b>
          <ul>
            <li>피드를 작성ㆍ수정ㆍ삭제할 수 있습니다.</li>
            <li>피드 공개 수준을 설정할 수 있습니다.</li>
            <li>태그, 이미지 유효성</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={group_join} alt="그룹 페이지" onClick={imgClick} />
        <div className="text_box">
          <b>그룹 페이지 ④</b>
          <ul>
            <li>댓글 작성, 수정, 삭제</li>
            <li>추천</li>
            <li>인기 게시물 확인 (일주일 좋아요)</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={group_setting} alt="그룹 설정 페이지" onClick={imgClick} />
        <div className="text_box">
          <b>그룹 설정 페이지</b>
          <ul>
            <li>그룹 설정 페이지에서 그룹 관리자는 그룹과 회원을 관리할 수 있습니다.</li>
            <li>일반 회원은 그룹 회원 목록을 조회할 수 있고, 그룹을 탈퇴할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={search} alt="전체 검색" onClick={imgClick} />
        <div className="text_box">
          <b>전체 검색</b>
          <ul>
            <li>전체 그룹ㆍ피드ㆍ태그를 검색할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={search} alt="채팅" onClick={imgClick} />
        <div className="text_box">
          <b>채팅</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={search} alt="알림" onClick={imgClick} />
        <div className="text_box">
          <b>알림</b>
        </div>
      </div>
      <ImgModal clickedImg={clickedImg} setClickedImg={setClickedImg} />
    </div>
  );
}

export default Doran;
