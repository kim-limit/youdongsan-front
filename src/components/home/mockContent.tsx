import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "70px",
    textAlign: "center",
  },
  highlight: {
    color: "#4CBCCC",
  },
});

export const MockContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{"수 백억원대"}</div>
      <div>{"자산가만"}</div>
      <div>{"누렸던 투자를"}</div>
      <div>
        <span className={classes.highlight}>{"모두"}</span>
        <span>{"에게"}</span>
      </div>
    </div>
  );
};
