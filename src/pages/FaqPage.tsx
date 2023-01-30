import React from "react";
import { MainContainer } from "../components/commons/MainContainer";
import { NavBar } from "../components/commons/NavBar";
import {Faq} from "../components/faq/Faq";

export const FaqPage = () => {
  return (
    <>
      {/* <NavBar path={"FAQ"} /> */}
      <MainContainer>
          <Faq/>
      </MainContainer>;
    </>
  );
};
