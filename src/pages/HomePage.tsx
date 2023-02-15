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
import { Section9 } from "../components/home/Section9";
import { Section10 } from "../components/home/Section10";
import { Section11 } from "../components/home/Section11";
import { useEffect, useState } from "react";
import ".././App.css";
import { IReserveProps } from "../interface/reserve";
import { useReserve } from "../hooks/use-reserve";
import { FooterContainer } from "../components/commons/FooterContainer";

export const HomePage = () => {
  const [isShow, setIsShow] = useState(false);
  const [reserveInfo, setReserveInfo] = useState<IReserveProps>({
    name: "",
    number: "",
    email: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReserveInfo({
      ...reserveInfo,
      [name]: value,
    });
  };

  const { reserve, isSuccess, isError } = useReserve();

  const expEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const expPhone = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;

  const reserveHandler = () => {
    if (!expPhone.test(reserveInfo.number)) {
      alert("휴대폰 번호를 정확하게 입력해 주세요.");
    } else if (!expEmail.test(reserveInfo.email)) {
      alert("이메일을 형식에 맞춰 입력해 주세요.");
    } else {
      reserve(reserveInfo);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      alert("사전예약이 완료되었습니다. 감사합니다.");
      setReserveInfo({
        ...reserveInfo,
        name: "",
        number: "",
        email: "",
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      alert("사전예약에 실패하였습니다.");
      setReserveInfo({
        ...reserveInfo,
        name: "",
        number: "",
        email: "",
      });
    }
  }, [isError]);

  return (
    <ReactFullpage
      //fullpage options
      licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
      scrollingSpeed={700} /* Options here */
      anchors={[
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
      ]}
      afterLoad={() => {
        setIsShow(true);
      }}
      onLeave={() => {
        setIsShow(false);
      }}
      render={({ state, fullpageApi }) => {
        const handleToReserve = () => {
          fullpageApi.moveTo("12", 0);
        };
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
            <div className={`section`}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <MainContainer>
                  <Section1 handleToReserve={handleToReserve} />
                </MainContainer>
              </div>
            </div>
            <div className={`section`}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <MainContainer>
                  <Section2 />
                </MainContainer>
              </div>
            </div>
            <div className={"section"}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <MainContainer>
                  <Section3 />
                </MainContainer>
              </div>
            </div>
            <div className={"section"}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <MainContainer>
                  <Section4 />
                </MainContainer>
              </div>
            </div>
            <div className={`section `}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <MainContainer>
                  <Section5 />
                </MainContainer>
              </div>
            </div>
            <div className={"section"}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <BackgroundContainer isLeft={true}>
                  <Section6 />
                </BackgroundContainer>
              </div>
            </div>
            <div className={"section"}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <BackgroundContainer isLeft={false}>
                  <Section7 />
                </BackgroundContainer>
              </div>
            </div>
            <div className={"section"}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <MainContainer>
                  <Section8 />
                </MainContainer>
              </div>
            </div>
            <div className={"section"}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <MainContainer>
                  <Section9 />
                </MainContainer>
              </div>
            </div>
            <div className={"section"}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <MainContainer>
                  <Section10 />
                </MainContainer>
              </div>
            </div>
            <div className={"section"}>
              <div className={`root ${isShow ? "show" : "leave"}`}>
                <MainContainer>
                  <Section11 />
                </MainContainer>
              </div>
            </div>
            <div className={"section"}>
              <MainContainer>
                <Section12
                  info={reserveInfo}
                  onChange={handleChangeInfo}
                  onClick={reserveHandler}
                />
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
