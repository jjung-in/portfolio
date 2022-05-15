import React from "react";
import "./ProjectData.scss";
import ImgModal from "../ImgModal/ImgModal";
import todolist from "../../assets/img_todolist/todolist.gif";

function Todolist({ clickedImg, setClickedImg, imgClick }) {
  return (
    <div id="projectData">
      <div className="descritpion_wrap">
        <img src={todolist} alt="투두리스트" onClick={imgClick} />
        <div className="text_box">
          <b>투두리스트</b>
          <ul>
            <li>할 일 추가ㆍ수정ㆍ삭제ㆍ완료</li>
          </ul>
        </div>
      </div>
      <ImgModal clickedImg={clickedImg} setClickedImg={setClickedImg} />
    </div>
  );
}

export default Todolist;
