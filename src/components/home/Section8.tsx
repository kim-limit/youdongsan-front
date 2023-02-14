import { makeStyles } from "@mui/styles";
import { Fade } from "react-awesome-reveal";
import { SolutionItem } from "./SolutionItem";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "60px",
    letterSpacing: "5px",
    paddingBottom: "14px",
    "@media (max-width: 600px)": {
      fontSize: "15px",
    },
  },
  explain: {
    paddingBottom: "50px",
    "@media (max-width: 600px)": {
      fontSize: "10px",
      paddingBottom: "20px",
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
  },
});
export const Section8 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fade cascade>
        <div className={classes.title}>{"SOLUTION"}</div>
        <div className={classes.explain}>
          {"유동신이 제공하는 3가지 솔루션"}
        </div>
        <div className={classes.content}>
          <Fade cascade delay={500}>
            <SolutionItem text={"환금성"} />
            <SolutionItem text={"소액투자"} />
            <SolutionItem text={"일할정산"} />
          </Fade>
        </div>
      </Fade>
    </div>
  );
};
