import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReserveInputGroup } from "./ReserveInputGroup";

const useStyles = makeStyles({
  title: {
    fontSize: "30px",
    letterSpacing: "4.8px",
    "@media (max-width: 600px)": {
      fontSize: "20px",
    },
  },
  content: {
    paddingTop: "100px",
    fontSize: "20px",
    lineHeight: "1.75",
    letterSpacing: "2px",
    "@media (max-width: 600px)": {
      fontSize: "15px",
      paddingTop: "10px",
    },
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
    "@media (max-width: 600px)": {
      width: "200px",
      height: "40px",
    },
  },
});

export const Section12 = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={8} xs={12}>
        <div className={classes.title}>
          {"지금 신청하시는 분들꼐"}
          <div>
            <span className={classes.highlight}>
              {"1년간 거래수수료 50% 할인 혜택"}
            </span>
            {"을 드립니다!"}
          </div>
          {"6000 명 선착순"}
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
      <Grid item sm={4} xs={12}>
        <ReserveInputGroup />
      </Grid>
    </Grid>
  );
};
