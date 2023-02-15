import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "64px",
    letterSpacing: "6.4px",
    height: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  highlight: {
    color: "#54EAFF",
  },
});

export const FooterText = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <span className={classes.highlight}>{"유동산"}</span>
        {"과 함께"}
      </div>
      <div>
        {"당신의"}
        <span className={classes.highlight}>{"돈"}</span>
        {"과"}
        <span className={classes.highlight}>{"시간"}</span>
        {"을"}
        <span className={classes.highlight}>{"손실없이 벌어주는"}</span>
      </div>
      <div>
        <span className={classes.highlight}>{"놀라운 투자"}</span>
        {"를"}
        <span className={classes.highlight}>{"경험"}</span>
        {"해보세요."}
      </div>
    </div>
  );
};
