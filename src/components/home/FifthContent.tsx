import { makeStyles } from "@mui/styles";
import { CircleContainer } from "./CircleContainer";
import { SolutionItem } from "./SolutionItem";

const useStyles = makeStyles({
  root: {
    width: "630px",
    textAlign: "center",
  },
  title: {
    fontSize: "60px",
    letterSpacing: "5px",
    paddingBottom: "14px",
  },
  explain: {
    paddingBottom: "50px",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
  },
});
export const FifthContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>{"SOLUTION"}</div>
      <div className={classes.explain}>{"유동신이 제공하는 5가지 솔루션"}</div>
      <div className={classes.content}>
        <SolutionItem
          text={"접근성"}
          firstLine={"앱을 통해"}
          secondLine={"언제 어디서든 투자"}
        />
        <SolutionItem
          text={"수익성"}
          firstLine={"예/적금보다"}
          secondLine={"평균 3% 높은 수익률"}
        />
        <SolutionItem
          text={"안전성"}
          firstLine={"건설자금 투자 이래,"}
          secondLine={"이자 연체율 0.03%의 기록 적인 안전한 투자"}
        />
      </div>
      <div className={classes.content}>
        <SolutionItem
          text={"환금성"}
          firstLine={"언제든지 환금 할 수 있는"}
          secondLine={"부동산 투자"}
        />
        <SolutionItem
          text={"소액투자"}
          firstLine={"소액으로도 가능한"}
          secondLine={"부동산 투자"}
        />
        <SolutionItem
          text={"일할정산"}
          firstLine={"투자한 금액의"}
          secondLine={"이자를 일할 정산"}
        />
      </div>
    </div>
  );
};
