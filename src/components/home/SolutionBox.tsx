import { makeStyles } from "@mui/styles";
import { Fade } from "react-awesome-reveal";

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
    "@media (max-width: 600px)": {
      fontSize: "20px",
      paddingTop: "50px",
    },
  },
  content: {
    fontSize: "30px",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
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
      <Fade cascade duration={1000}>
        <div className={classes.head}>{head}</div>
        <div className={classes.content}>
          <div>{firstLine}</div>
          <div>{secondLine}</div>
        </div>
      </Fade>
      <div></div>
    </div>
  );
};
