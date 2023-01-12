import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import { MainContainer } from "../components/commons/MainContainer";
import { Link } from "@material-ui/core";
import { Footer } from "../components/commons/Footer";

export const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={300} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <MainContainer></MainContainer>
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
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
