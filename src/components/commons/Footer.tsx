import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "300px",
    maxWidth: "1240px",
    margin: "0 auto",
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
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <strong className={classes.head}>{"유동산"}</strong>
      <div className={classes.address}>
        <p>
          {
            "대표자 : 이환희 • 개인정보책임관리자 : 이환희 • 사업자번호 : 332-87-00895"
          }
        </p>
        <p>{"사업장 주소 : 서울특별시 마포구 대흥로 67(정신빌딩) 401호"}</p>
      </div>
      <hr />
      <div className={classes.bottom}>
        <p>{"이용약관 | 개인정보처리방침 | FAQ | 공지사항"}</p>
        <p>{"문의전화 070-7808-4211 • 기타문의 pawinhand@naver.com"}</p>
        <p>
          {
            "©포인핸드 제공 • ©Pawinhankteam all right reserved • 데이터 출처 : 농립축산식품부"
          }
        </p>
      </div>
    </div>
  );
};
