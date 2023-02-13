import { makeStyles } from "@mui/styles";
import { FooterBtn } from "./FooterBtn";
import Insta from "../../assets/Insta.svg";
import PlayStore from "../../assets/PlayStore.svg";
import Apple from "../../assets/Apple.svg";

const useStyles = makeStyles({
  root: {
    height: "40vh",
    width: "100vw",
    padding: "0 200px",
  },
  head: {
    fontSize: "25px",
    color: "#ffffff",
  },
  address: {
    fontSize: "18px",
    color: "grey",
    fontWeight: "bold",
  },
  bottom: {
    fontSize: "18px",
    color: "#ffffff",
    fontWeight: "bold",
  },
  btn: {
    display: "flex",
    width: "200px",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
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
        <p>
          {
            "대표자 : 이환희•개인정보책임관리자 : 이환희•사업자번호 : 332-87-00895"
          }
        </p>
        <p>{"사업장 주소 : 서울특별시 마포구 대흥로 67(정신빌딩) 401호"}</p>
      </div>
      <hr />
      <div className={classes.bottom}>
        <p>{"이용약관 | 개인정보처리방침 | FAQ | 공지사항"}</p>
        <p>{"문의전화 070-7808-4211•기타문의 pawinhand@naver.com"}</p>
        <p>
          {
            "©포인핸드 제공 • ©Pawinhankteam all right reserved • 데이터 출처 : 농립축산식품부"
          }
        </p>
      </div>
    </div>
  );
};
