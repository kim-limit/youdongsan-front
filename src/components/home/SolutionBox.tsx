import { makeStyles } from "@mui/styles";
import { lineHeight } from "@mui/system";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head: {
    textAlign: "center",
    fontSize: "48px",
  },
  content: {
    fontSize: "30px",
    textAlign: "center",
  },
});

interface ISolutionBoxProps {
  head: string;
  firstLine: string;
  secondLine: string;
}

export const SolutionBox = ({
  head,
  firstLine,
  secondLine,
}: ISolutionBoxProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.head}>{head}</div>
      <div className={classes.content}>
        <div>{firstLine}</div>
        <div>{secondLine}</div>
      </div>
      <div></div>
    </div>
  );
};