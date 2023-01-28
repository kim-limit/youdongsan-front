import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: "48px",
  },
  content: {
    fontSize: "24px",
  },
  grey: {
    color: "rgba(255, 255, 255, 0.45)",
    paddingBottom: "43px",
  },
  img: {
    height: "100%",
  },
});
export const Section4 = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.img} item sm={7}></Grid>
      <Grid item sm={5}>
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
