import { makeStyles } from "@mui/styles";
import { Fade } from "react-awesome-reveal";
import { StepText } from "./StepText";

const useStyles = makeStyles({
  root: {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "@media (max-height: 700px)": {
      height: "70%",
    },
  },
  head: {
    fontSize: "48px",
    marginRight: "40px",
    "@media (max-width: 1200px)": {
      fontSize: "30px",
    },
    "@media (max-width: 900px)": {
      fontSize: "25px",
    },
    "@media (max-width: 600px)": {
      fontSize: "18px",
      padding: "20px",
    },
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 600px)": {
      flexDirection: "column-reverse",
    },
  },
  step1: {
    marginTop: "30px",
    "@media (max-width: 1200px)": {
      marginTop: "80px",
    },
    "@media (max-width: 900px)": {
      marginTop: "0px",
      marginLeft: "100px",
    },
    "@media (max-width: 600px)": {
      marginLeft: "0px",
      marginRight: "200px",
    },
  },
  step2: {
    marginRight: "400px",
    marginTop: "100px",
    "@media (max-width: 900px)": {
      marginRight: "0px",
    },
    "@media (max-width: 600px)": {
      marginRight: "0px",
      marginTop: "80px",
    },
  },
  step3: {
    marginLeft: "700px",
    marginTop: "50px",
    "@media (max-width: 900px)": {
      marginLeft: "400px",
    },
    "@media (max-width: 600px)": {
      marginLeft: "250px",
      marginTop: "0px",
    },
  },
});
export const Section6 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Fade delay={1000} duration={250}>
          <div className={classes.step1}>
            <StepText
              step={1}
              firstLine={"건설 관계사는 유동산을 통해"}
              secondLine={"건설에 필요한 자금을 모집"}
            />
          </div>
        </Fade>
        <Fade delay={500} duration={1000}>
          <div className={classes.head}>
            <div>{"건물을 지을때 투자하여"}</div>
            <div>{"가장 먼저 투자금을 회수하는 시장"}</div>
          </div>
        </Fade>
      </div>
      <Fade cascade delay={1500} duration={500}>
        <div className={classes.step2}>
          <StepText
            step={2}
            firstLine={"유동산을 통해 대출 받은 자금으로"}
            secondLine={"건설 시작"}
          />
        </div>
        <div className={classes.step3}>
          <StepText
            step={3}
            firstLine={"분양을 통해 수익을 일으켜"}
            secondLine={"투자자들에게 원금 및 이자 상환"}
          />
        </div>
      </Fade>
    </div>
  );
};
