import React from "react";
import {MainContainer} from "../components/commons/MainContainer";
import {NavBar} from "../components/commons/NavBar";
import {Notice} from "../components/notice/Notice";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

export const NoticePage = () => {
    return (
        <>
            {/* <NavBar path={"공지사항"} /> */}
            <QueryClientProvider client={queryClient}>
                <Notice/>
            </QueryClientProvider>;
        </>
    );
};
