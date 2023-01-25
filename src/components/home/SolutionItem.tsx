import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "240px",
    paddingTop: "25px",
  },
  circle: {
    width: "123px",
    height: "123px",
    borderRadius: "50%",
    backgroundColor: "#222222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "19px",
  },
  explain: {
    paddingTop: "18px",
    textAlign: "center",
    fontSize: "11px",
  },
});
interface ISolutionItemProps {
  text: string;
  firstLine: string;
  secondLine: string;
}
export const SolutionItem = ({
  text,
  firstLine,
  secondLine,
}: ISolutionItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.circle}>{text}</div>
      <div className={classes.explain}>
        <div>{firstLine}</div>
        <div>{secondLine}</div>
      </div>
    </div>
  );
};
