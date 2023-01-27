import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReserveBtn } from "./ReserveBtn";

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

export const IntroduceText = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
        {"투자한 돈 가장 먼저 돌려받는 부동산 선순위 투자"}
      </div>
    </div>
  );
};
