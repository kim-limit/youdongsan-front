import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "25px",
    paddingBottom: "100px",
  },
  circle: {
    width: "228px",
    height: "228px",
    "@media (max-width: 600px)": {
      width: "80px",
      height: "80px",
      fontSize: "10px",
    },
    borderRadius: "50%",
    backgroundColor: "#6fc4d0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
    color: "#000",
  },
});

interface ISolutionItemProps {
  text: string;
}

export const SolutionItem = ({ text }: ISolutionItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.circle}>{text}</div>
    </div>
  );
};
