import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import { AboutUs } from "../components/aboutus/AboutUs";
import { AboutUs2 } from "../components/aboutus/AboutUs2";
import { BudongSan } from "../components/aboutus/Budongsan";
import { MainContainer } from "../components/commons/MainContainer";

export const AboutUsPage = () => {
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
                <BudongSan />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <AboutUs />
              </MainContainer>
            </div>
            <div className="section">
              <MainContainer>
                <AboutUs2 />
              </MainContainer>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
