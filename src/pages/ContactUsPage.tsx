import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";
import { FooterContainer } from "../components/commons/FooterContainer";
import { MainContainer } from "../components/commons/MainContainer";
import { ContactUs } from "../components/contactus/ContactUs";

export const ContactUsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={700} /* Options here */
      anchors={["1", "2"]}
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
              <MainContainer>
                <ContactUs />
              </MainContainer>
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
