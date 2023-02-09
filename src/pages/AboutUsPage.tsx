import ReactFullpage from "@fullpage/react-fullpage";
import { AboutUs } from "../components/aboutus/AboutUs";
import { AboutUs2 } from "../components/aboutus/AboutUs2";
import { BudongSan } from "../components/aboutus/Budongsan";
import { MainContainer } from "../components/commons/MainContainer";
import ".././App.css";
import { useState } from "react";

export const AboutUsPage = () => {
  const [isRender, setIsRender] = useState(false);
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={700} /* Options here */
      afterLoad={() => {
        setIsRender(true);
      }}
      onLeave={() => {
        setIsRender(false);
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className={`root ${isRender ? "show" : "leave"}`}>
                <MainContainer>
                  <BudongSan />
                </MainContainer>
              </div>
            </div>
            <div className="section">
              <div className={`root ${isRender ? "show" : "leave"}`}>
                <MainContainer>
                  <AboutUs />
                </MainContainer>
              </div>
            </div>
            <div className="section">
              <div className={`root ${isRender ? "show" : "leave"}`}>
                <MainContainer>
                  <AboutUs2 />
                </MainContainer>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
