import ReactFullpage from "@fullpage/react-fullpage";
import { AboutUs } from "../components/aboutus/AboutUs";
import { AboutUs2 } from "../components/aboutus/AboutUs2";
import { BudongSan } from "../components/aboutus/Budongsan";
import { MainContainer } from "../components/commons/MainContainer";
import ".././App.css";
import { useState } from "react";
import { FooterContainer } from "../components/commons/FooterContainer";

export const AboutUsPage = () => {
  const [isRender, setIsRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={700} /* Options here */
      anchors={["1", "2", "3", "4"]}
      afterLoad={() => {
        setIsRender(true);
      }}
      onLeave={() => {
        setIsRender(false);
      }}
      render={({ state, fullpageApi }) => {
        const handleOpen = () => {
          setIsOpen(true);
          fullpageApi.setAllowScrolling(false);
        };
        const handleClose = () => {
          setIsOpen(false);
          fullpageApi.setAllowScrolling(true);
        };
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
            <div className={"section"}>
              <FooterContainer
                isOpen={isOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
