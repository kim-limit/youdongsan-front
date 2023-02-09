import { makeStyles } from "@mui/styles";
import { CircleContainer } from "./CircleContainer";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
  },
});

export const FourthContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircleContainer isNormal={false}>
        <div>{"시장 규모"}</div>
        <div>{"112조"}</div>
      </CircleContainer>
      <CircleContainer isNormal={true}>
        <div>{"평균 수익률"}</div>
        <div>{"6%~8%"}</div>
      </CircleContainer>
      <CircleContainer isNormal={true}>
        <div>{"이자연체율"}</div>
        <div>{"0.03%"}</div>
      </CircleContainer>
    </div>
  );
};
