import { makeStyles } from "@mui/styles";
import { StepText } from "./StepText";

const useStyles = makeStyles({
  root: {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
  },
  head: {
    fontSize: "48px",
    marginRight: "40px",
    "@media (max-width: 600px)": {
      fontSize: "15px",
    },
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
  },
  step1: {
    paddingTop: "30px",
    "@media (max-width: 600px)": {
      paddingTop: "80px",
    },
  },
  step2: {
    marginRight: "400px",
    marginTop: "100px",
    "@media (max-width: 600px)": {
      marginRight: "0px",
      marginTop: "80px",
    },
  },
  step3: {
    marginLeft: "700px",
    marginTop: "50px",
    "@media (max-width: 600px)": {
      marginLeft: "250px",
      paddingBottom: "100px",
    },
  },
});
export const Section6 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.step1}>
          <StepText
            step={1}
            firstLine={"건설 관계사는 유동산을 통해"}
            secondLine={"건설에 필요한 자금을 모집"}
          />
        </div>
        <div className={classes.head}>
          <div>{"건물을 지을때 투자하여"}</div>
          <div>{"가장 먼저 투자금을 회수하는 시장"}</div>
        </div>
      </div>
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
    </div>
  );
};
