import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContainer } from "../components/commons/MainContainer";
import { MainApp } from "../components/commons/home/MainApp";
import { BackgroundContainer } from "../components/commons/home/BackgroundContainer";
import { Introduce } from "../components/commons/home/Introduce";

export const HomePage = () => {
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
            <div className="section">
              <MainContainer>
                <MainApp />
              </MainContainer>
            </div>
            <div className="section">
              <BackgroundContainer>
                <Introduce />
              </BackgroundContainer>
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
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
