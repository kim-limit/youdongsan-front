import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContainer } from "../components/commons/MainContainer";
import { Link } from "@material-ui/core";
import { Footer } from "../components/commons/Footer";
import { NavBar } from "../components/commons/NavBar";
import { Toggle } from "../components/commons/Toggle";
import { MenuBar } from "../components/commons/MenuBar";

export const Fullpage = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={300} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <NavBar path={"유동산"} />
            <div className="section">
              <MainContainer>
                <p>{"접근조차 못하던, 안전한"}</p>
                <p>{"선순위 건설자금 투자 시장"}</p>
                <p>{"유동산이 열어 드리겠습니다."}</p>
                <Toggle isToggle={isToggle} toggleHandler={toggleHandler} />
                <MenuBar isToggle={isToggle} text={"HOME"} />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveTo("first", 0)}>
                  Click me to move down
                </button>
                <p
                  dangerouslySetInnerHTML={{
                    __html: `<p><span style="color:#f1c40f">안녕하세요</span></p>
                <p><strong>지금 드릴 말씀을 전하게</strong></p>
                <p>&nbsp;</p>
                <p>ㅇㄹㅈㅇㄹ<span style="background-color:#2ecc71">ㅈㅇㄹㅈㅇㄹㅈㅇㄹ</span></p>
                <p>ㅋㄷㅋㄷ</p>`,
                  }}
                ></p>
              </MainContainer>
            </div>
            <div className="section">
              <div style={{ height: "calc(100vh - 373px)" }}></div>
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
