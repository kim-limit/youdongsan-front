import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContainer } from "./commons/MainContainer";

export const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <MainContainer></MainContainer>
          </div>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
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
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
