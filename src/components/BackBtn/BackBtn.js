import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackBtn.scss";

function BackBtn() {
  /* 뒤로가기 버튼 */
  const navigate = useNavigate();

  return (
    <button
      className="backBtn"
      onClick={() => {
        navigate(-1);
      }}></button>
  );
}

export default BackBtn;
