import { makeStyles } from "@mui/styles";
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
  },
  explain: {
    paddingBottom: "50px",
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
      <div className={classes.title}>{"SOLUTION"}</div>
      <div className={classes.explain}>{"유동신이 제공하는 5가지 솔루션"}</div>
      <div className={classes.content}>
        <SolutionItem text={"환금성"} firstLine={""} secondLine={""} />
        <SolutionItem text={"소액투자"} firstLine={""} secondLine={""} />
        <SolutionItem text={"일할정산"} firstLine={""} secondLine={""} />
      </div>
    </div>
  );
};
