import React from "react";
import "./ProjectData.scss";
import ImgModal from "../ImgModal/ImgModal";
import join from "../../assets/img_chic/join.gif";
import login from "../../assets/img_chic/login.gif";
import main from "../../assets/img_chic/main.gif";
import mypage from "../../assets/img_chic/mypage.gif";
import post_list from "../../assets/img_chic/post_list.gif";
import post_write from "../../assets/img_chic/post_write.gif";
import chat from "../../assets/img_chic/chat.gif";
import review_list from "../../assets/img_chic/review_list.gif";
import review_detail from "../../assets/img_chic/review_detail.gif";

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
        <img src={join} alt="회원가입" onClick={imgClick} />
        <div className="text_box">
          <b>회원가입</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={login} alt="로그인" onClick={imgClick} />
        <div className="text_box">
          <b>로그인ㆍ로그아웃</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={main} alt="메인" onClick={imgClick} />
        <div className="text_box">
          <b>메인ㆍ오시는 길ㆍ가이드 페이지</b>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={mypage} alt="마이페이지" onClick={imgClick} />
        <div className="text_box">
          <b>마이 페이지</b>
          <ul>
            <li>마이 페이지에서 회원 정보를 수정할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={post_list} alt="모집게시판" onClick={imgClick} />
        <div className="text_box">
          <b>모집게시판 ①</b>
          <ul>
            <li>배달 음식을 같이 먹거나 같이 주문할 사람을 모집하는 게시판입니다.</li>
            <li>같은 지역의 게시물만 볼 수 있습니다.</li>
            <li>마감시간 1시간 전부터 출발임박 표시가 나타납니다.</li>
            <li>마감시간 이후에는 마감완료 표시가 나타납니다.</li>
            <li>게시물의 제목과 동네를 검색할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={post_write} alt="모집게시판" onClick={imgClick} />
        <div className="text_box">
          <b>모집게시판 ②</b>
          <ul>
            <li>같이/따로 먹어요를 선택하여 게시물을 작성합니다.</li>
            <li>마감시간은 현재 이후 시간만 선택할 수 있습니다.</li>
            <li>자신의 게시물만 수정ㆍ삭제가 가능합니다.</li>
            <li>게시물에 참여한 사람이 있을 경우, 수정ㆍ삭제가 불가합니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={chat} alt="채팅" onClick={imgClick} />
        <div className="text_box">
          <b>모집게시판 참여하기ㆍ채팅</b>
          <ul>
            <li>참여하기 버튼을 클릭하면 해당 게시물에 참여가 되면서 채팅창이 나타납니다.</li>
            <li>채팅 나가기 버튼을 클릭하면 게시물 참여가 취소됩니다.</li>
            <li>게시물 작성자는 채팅에서 나갈 수 없습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={review_list} alt="후기게시판" onClick={imgClick} />
        <div className="text_box">
          <b>후기게시판 ①</b>
          <ul>
            <li>후기이나 질문 등 자유로운 글을 작성하는 게시판입니다.</li>
            <li>모든 지역의 게시물을 볼 수 있습니다.</li>
            <li>게시물의 제목, 내용, 작성자, 지역을 검색할 수 있습니다.</li>
          </ul>
        </div>
      </div>
      <div className="descritpion_wrap">
        <img src={review_detail} alt="후기게시판" onClick={imgClick} />
        <div className="text_box">
          <b>후기게시판 ②</b>
          <ul>
            <li>게시물 상세 페이지에서 댓글을 작성할 수 있습니다.</li>
            <li>자신의 게시물ㆍ댓글만 수정ㆍ삭제가 가능합니다.</li>
          </ul>
        </div>
      </div>
      <ImgModal clickedImg={clickedImg} setClickedImg={setClickedImg} />
    </div>
  );
}

export default Chic;
