import ReactFullpage from "@fullpage/react-fullpage";
import { MainContainer } from "../components/commons/MainContainer";
import { FirstContent } from "../components/home/FirstContent";
import { BackgroundContainer } from "../components/home/BackgroundContainer";
import { SecondContent } from "../components/home/SecondContent";
import { ThirdContent } from "../components/home/ThirdContent";
import { FourthContent } from "../components/home/FourthContent";
import { LastContent } from "../components/home/LastContent";
import { FifthContent } from "../components/home/FifthContent";

export const HomePage = () => {
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
                <FirstContent />
              </MainContainer>
            </div>
            <div className="section">
              <BackgroundContainer isImg={true}>
                <SecondContent />
              </BackgroundContainer>
            </div>
            <div className="section">
              <MainContainer>
                <ThirdContent />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <FourthContent />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <FifthContent />
              </MainContainer>
            </div>
            <div className="section">
              <BackgroundContainer isImg={false}>
                <LastContent />
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
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
