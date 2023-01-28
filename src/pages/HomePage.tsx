import ReactFullpage from "@fullpage/react-fullpage";
import { MainContainer } from "../components/commons/MainContainer";
import { Section1 } from "../components/home/Section1";
import { Section8 } from "../components/home/Section8";
import { Section12 } from "../components/home/Section12";
import { Section2 } from "../components/home/Section2";
import { Section3 } from "../components/home/Section3";
import { Section4 } from "../components/home/Section4";
import { Section5 } from "../components/home/Section5";
import { BackgroundContainer } from "../components/home/BackgroundContainer";
import { Section6 } from "../components/home/Section6";
import { Section7 } from "../components/home/Section7";

export const HomePage = () => {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={700} /* Options here */
      anchors={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
      render={({ state, fullpageApi }) => {
        const handleToReserve = () => {
          fullpageApi.moveTo("12", 0);
        };
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <MainContainer>
                <Section1 handleToReserve={handleToReserve} />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <Section2 />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <Section3 />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <Section4 />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <Section5 />
              </MainContainer>
            </div>
            <div className="section">
              <BackgroundContainer isLeft={true}>
                <Section6 />
              </BackgroundContainer>
            </div>
            <div className="section">
              <BackgroundContainer isLeft={false}>
                <Section7 />
              </BackgroundContainer>
            </div>
            <div className="section">
              <MainContainer>
                <Section8 />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer></MainContainer>
            </div>
            <div className="section">
              <MainContainer></MainContainer>
            </div>
            <div className="section">
              <MainContainer></MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <Section12 />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <p>Section 1 (welcome to fullpage.js)</p>;
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
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
