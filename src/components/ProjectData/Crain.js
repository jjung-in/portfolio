import React from "react";
import "./ProjectData.scss";
import crain01 from "../../assets/img_crain/crain01.png";
import crain02 from "../../assets/img_crain/crain02.png";
import crain03 from "../../assets/img_crain/crain03.png";

function Carin() {
  return (
    <div id="projectData">
      <div className="img_wrap">
				<img src={crain01} alt="크레인" />
				<img src={crain02} alt="크레인" />
				<img src={crain03} alt="크레인" />
			</div>
    </div>
  );
}

export default Carin;
