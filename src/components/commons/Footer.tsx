import { makeStyles } from "@mui/styles";
import { FooterBtn } from "./FooterBtn";
import Insta from "../../assets/Insta.svg";
import PlayStore from "../../assets/PlayStore.svg";
import Apple from "../../assets/Apple.svg";

const useStyles = makeStyles({
  root: {
    height: "35%",
    width: "100vw",
    backgroundColor: "#222222",
    padding: "50px 150px",
    "@media (max-width: 600px)": {
      height: "100%",
      padding: "0 25px 0 25px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  head: {
    fontSize: "22px",
    color: "#ffffff",
    "@media (max-width: 600px)": {
      marginBottom: "20px",
      fontSize: "18px",
    },
  },
  address: {
    fontSize: "14px",
    color: "grey",
    fontWeight: "bold",
    "@media (max-width: 600px)": {
      fontSize: "10px",
      marginBottom: "30px",
    },
  },
  bottom: {
    fontSize: "14px",
    color: "#ffffff",
    fontWeight: "bold",
    "@media (max-width: 600px)": {
      marginTop: "30px",
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
interface IFooterProps {
  handleUse: () => void;
  handleIndiv: () => void;
}
export const Footer = ({ handleUse, handleIndiv }: IFooterProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <strong className={classes.head}>{"유동산"}</strong>
        <div className={classes.btn}>
          <FooterBtn img={Apple} path={"/"} width={"40px"} height={"40px"} />
          <FooterBtn
            img={PlayStore}
            path={"/"}
            width={"40px"}
            height={"40px"}
          />
          <FooterBtn
            img={Insta}
            path={"https://www.instagram.com/youdongsan/"}
            width={"40px"}
            height={"40px"}
          />
        </div>
      </div>
      <div className={classes.address}>
        <p>{"대표이사 : 오 준 식•법인등록번호 : 110111-8498465"}</p>
        <p>{"사업장 주소 : 서울특별시 영등포구 여의대방로 65길 20, 1101호"}</p>
      </div>
      <div>
        <hr />
      </div>
      <div className={classes.bottom}>
        <p>
          <span onClick={handleUse}>{"이용약관 |"}</span>
          <span onClick={handleIndiv}>{" 개인 정보 처리 방침 |"}</span>
          <span>{" FAQ |"}</span>
          <span>{" 공지사항"}</span>
        </p>
        <p>{"기타 문의 : adm.youdongsan@gmail.com"}</p>
        <p>{"©유동산 제공 • ©Youdongsan all right reserved"}</p>
      </div>
    </div>
  );
};
