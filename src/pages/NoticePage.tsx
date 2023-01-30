import React from "react";
import {MainContainer} from "../components/commons/MainContainer";
import {NavBar} from "../components/commons/NavBar";
import {Notice} from "../components/notice/Notice";

export const NoticePage = () => {
    return (
        <>
            {/* <NavBar path={"공지사항"} /> */}
            <MainContainer>
                <Notice/>
            </MainContainer>;
        </>
    );
};
