import React from "react";
import "./ProjectData.scss";
import todolist from "../../assets/img_todolist/todolist.gif";

function Todolist() {
  return (
    <div id="projectData">
      <div className="descritpion_wrap">
        <img src={todolist} alt="투두리스트" />
        <div className="text_box">
          <b>투두리스트</b>
          <ul>
            <li>할 일 추가ㆍ수정ㆍ삭제ㆍ완료</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
