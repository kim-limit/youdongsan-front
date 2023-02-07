import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Money from "../../assets/Money.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "48px",
    paddingTop: "43px",
    "@media (max-width: 600px)": {
      fontSize: "16px",
      paddingTop: "20px",
    },
  },
  content: {
    fontSize: "24px",
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
  },
  grey: {
    color: "rgba(255, 255, 255, 0.45)",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  head: {
    fontSize: "48px",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    paddingBottom: "130px",
    "@media (max-width: 600px)": {
      paddingBottom: "0px",
    },
  },
});
export const Section4 = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.img} item sm={7}>
        <img className={classes.img} src={Money} />
      </Grid>
      <Grid className={classes.text} item sm={5}>
        <div className={classes.title}>{"[안정성]"}</div>
        <div className={classes.grey}>
          <div className={classes.title}>{"새로운"}</div>
          <div className={classes.content}>
            {"수백억대 자산가와 기관만 참여했던 기회"}
          </div>
        </div>
        <div className={classes.title}>{"안전한 투자"}</div>
        <div className={classes.content}>
          {"초대형 금융기관들과 함께 1 순위로서 투자금을 상환"}
        </div>
        <div className={classes.content}>
          {"FY22 상반기 기준 이자지급 연체율 0.02%"}
        </div>
      </Grid>
    </Grid>
  );
};
