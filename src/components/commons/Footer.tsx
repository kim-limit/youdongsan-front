import { makeStyles } from "@mui/styles";
import { FooterBtn } from "./FooterBtn";
import Insta from "../../assets/Insta.svg";
import PlayStore from "../../assets/PlayStore.svg";
import Apple from "../../assets/Apple.svg";

const useStyles = makeStyles({
  root: {
    height: "40vh",
    width: "80vw",
  },
  head: {
    fontSize: "25px",
    color: "#ffffff",
    "@media (max-width: 600px)": {
      fontSize: "18px",
    },
  },
  address: {
    fontSize: "18px",
    color: "grey",
    fontWeight: "bold",
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
  },
  bottom: {
    fontSize: "18px",
    color: "#ffffff",
    fontWeight: "bold",
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
  },
  btn: {
    display: "flex",
    width: "200px",
    justifyContent: "space-between",
    "@media (max-width: 600px)": {
      width: "100%",
      justifyContent: "space-around",
      paddingBottom: "50px",
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 600px)": {
      flexDirection: "column-reverse",
    },
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <strong className={classes.head}>{"유동산"}</strong>
        <div className={classes.btn}>
          <FooterBtn img={Apple} path={"/"} width={"50px"} height={"50px"} />
          <FooterBtn
            img={PlayStore}
            path={"/"}
            width={"50px"}
            height={"50px"}
          />
          <FooterBtn img={Insta} path={"/"} width={"50px"} height={"50px"} />
        </div>
      </div>
      <div className={classes.address}>
        <p>{"대표이사 : 오 준 식•법인등록번호 : 110111-8498465"}</p>
        <p>{"사업장 주소 : 서울특별시 영등포구 여의대방로 65길 20, 1101호"}</p>
      </div>
      <hr />
      <div className={classes.bottom}>
        <p>{"이용약관 | 개인정보처리방침 | FAQ | 공지사항"}</p>
        <p>{"기타 문의 : adm.youdongsan@gmail.com"}</p>
        <p>{"©유동산 제공 • ©Youdongsan all right reserved"}</p>
      </div>
    </div>
  );
};
