import { makeStyles } from "@mui/styles";
import { StepText } from "./StepText";

const useStyles = makeStyles({
  root: {
    height: "72%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "@media (max-width: 600px)": {
      justifyContent: "center",
    },
  },
  head: {
    fontSize: "48px",
    marginLeft: "40px",
    "@media (max-width: 1200px)": {
      fontSize: "30px",
    },
    "@media (max-width: 900px)": {
      fontSize: "25px",
    },
    "@media (max-width: 600px)": {
      fontSize: "18px",
    },
  },
  step1: {
    marginRight: "400px",
    marginBottom: "70px",
    "@media (max-width: 1200px)": {
      marginBottom: "100px",
    },
    "@media (max-width: 900px)": {
      marginTop: "0px",
      marginBottom: "200px",
    },
    "@media (max-width: 600px)": {
      marginRight: "200px",
    },
  },
  step: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "20px",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  step2: {
    marginTop: "20px",
    "@media (max-width: 1200px)": {
      marginTop: "70px",
    },
    "@media (max-width: 900px)": {
      marginTop: "0px",
      marginBottom: "80px",
      marginRight: "50px",
    },
    "@media (max-width: 600px)": {
      marginTop: "20px",
      marginLeft: "150px",
    },
  },
});
export const Section7 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.step}>
        <div className={classes.head}>
          <div>{"건물을 담보로 투자하여 "}</div>
          <div>{"가장 먼저 투자금을 회수하는 시장"}</div>
        </div>
        <div className={classes.step2}>
          <StepText
            step={2}
            firstLine={"대출자는 건물의 임대료 및"}
            secondLine={"기타 수익으로"}
            thirdLine={"투자자들에게 원금 및 이자 상환"}
          />
        </div>
      </div>
      <div className={classes.step1}>
        <StepText
          step={1}
          firstLine={"건물 소유주는 유동산을 통해"}
          secondLine={"건물을 담보로  필요한 자금을 모집"}
        />
      </div>
    </div>
  );
};
