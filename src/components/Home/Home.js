import React, { useEffect, useState } from "react";
import "./Home.scss";

function Home() {
  const txt = "안녕하세요!\n프론트엔드 개발자\n고정인입니다";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]); // 이전 set한 문자 + 다음 문자
      setCount(count + 1); // 개수 만큼 체크
    }, 180);

    if (count === txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  });

  return (
    <div id="home">
      <div className="container home_inwrap">
        <p>{text}</p>
        <span>
          프론트엔드 개발자
          <br />
          고정인입니다.
        </span>
      </div>
    </div>
  );
}

export default Home;
