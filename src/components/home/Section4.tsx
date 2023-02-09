import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Fade } from "react-awesome-reveal";
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
        <Fade duration={4000}>
          <img className={classes.img} src={Money} />
        </Fade>
      </Grid>
      <Grid className={classes.text} item sm={5}>
        <Fade duration={1500} cascade>
          <div className={classes.title}>{"[안정성]"}</div>
          <div className={`${classes.title} ${classes.grey}`}>{"새로운"}</div>
          <div className={`${classes.content} ${classes.grey}`}>
            {"수백억대 자산가와 기관만 참여했던 기회"}
          </div>
          <div className={classes.title}>{"안전한 투자"}</div>
          <div className={classes.content}>
            {"초대형 금융기관들과 함께 1 순위로서 투자금을 상환"}
            {"FY22 상반기 기준 이자지급 연체율 0.02%"}
          </div>
          <div className={classes.content}></div>
        </Fade>
      </Grid>
    </Grid>
  );
};
