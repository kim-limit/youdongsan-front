import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReserveInputGroup } from "./ReserveInputGroup";

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
    paddingTop: "100px",
    fontSize: "20px",
    lineHeight: "1.75",
    letterSpacing: "2px",
  },
  highlight: {
    color: "#54EAFF",
  },
  btn: {
    width: "289px",
    height: "48.5px",
    backgroundColor: "#4cbccc",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
});

export const Section12 = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={8}>
        <div className={classes.title}>
          {"투자 시 사용가능한 "}
          <div>
            <span className={classes.highlight}>{"투자 포인트 10,000원"}</span>
            {"을 드립니다!"}
          </div>
        </div>
        <div className={classes.content}>
          <div>
            {"출시 전, "}
            <span className={classes.highlight}>{"선순위 채권"}</span>
            {"과"}
            <span className={classes.highlight}>{"부동산 투자 스터디"}</span>
            {"를 원하시는 분들은"}
          </div>
          <div>
            {"아래 "}
            <span className={classes.highlight}>{"오픈카톡방"}</span>
            {"에서 "}
            <span className={classes.highlight}>{"교육"}</span>
            {" 및 "}
            <span className={classes.highlight}>{"정보 제공"}</span>
            {"을 드리고 있습니다."}
          </div>
          <div className={classes.btn}>{"오픈카톡방 바로가기"}</div>
        </div>
      </Grid>
      <Grid item sm={4}>
        <ReserveInputGroup />
      </Grid>
    </Grid>
  );
};
