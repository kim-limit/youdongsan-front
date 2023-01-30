import React from "react";
import {MainContainer} from "../components/commons/MainContainer";
import {NavBar} from "../components/commons/NavBar";
import {Faq} from "../components/faq/Faq";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

export const FaqPage = () => {
    return (
        <>
            {/* <NavBar path={"FAQ"} /> */}
            <QueryClientProvider client={queryClient}>
                <Faq/>
            </QueryClientProvider>;
        </>
    );
};
