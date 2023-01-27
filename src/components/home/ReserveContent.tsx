import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "48px",
    letterSpacing: "4.8px",
  },
  content: {
    paddingTop: "35px",
    fontSize: "20px",
  },
  highlight: {
    color: "#54EAFF",
  },
});

export const ReserveContent = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>
        {"은행에 "} <span className={classes.highlight}>{"돈"}</span>
        {" 맡기지 마세요"}
      </div>
      <div className={classes.title}>
        {"은행과 "}
        <span className={classes.highlight}>{"같이 투자"}</span>
        {" 하세요"}
      </div>
      <div className={classes.content}>
        {"사전 예약하시면 투자 시 사용가능한 "}
        <span className={classes.highlight}>
          {"투자 포인트 10,000원을 드립니다"}
        </span>
      </div>
      <div className={classes.content}>
        {"출시 전, "}
        <span className={classes.highlight}>{"선순위 채권"}</span>
        {"과"}
        <span className={classes.highlight}>{"부동산 투자 스터디"}</span>
        {"를 원하시는 분들은"}
      </div>
      <div className={classes.content}>
        {"아래 "}
        <span className={classes.highlight}>{"오픈카톡방"}</span>
        {"에서 "}
        <span className={classes.highlight}>{"교육"}</span>
        {" 및 "}
        <span className={classes.highlight}>{"정보 제공"}</span>
        {"을 드리고 있습니다."}
      </div>
    </div>
  );
};
