import React from "react";
import "./ImgModal.scss";

function ImgModal({ clickedImg, setClickedImg }) {
  const modalClose = () => {
    setClickedImg(null);
  };

  return (
    <div id="imgModal" className={clickedImg ? "on" : ""} onClick={modalClose}>
      <img src={clickedImg} alt="" />
    </div>
  );
}

export default ImgModal;
