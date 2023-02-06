import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  text: {
    fontSize: "40px",
    "@media (max-width: 600px)": {
      fontSize: "18px",
    },
  },
  head: {
    paddingTop: "62px",
    fontSize: "60px",
    "@media (max-width: 600px)": {
      fontSize: "30px",
    },
  },
  highlight: {
    color: "#4CBCCC",
  },
});

export const Section2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <div>{"접근조차 못하던, 안전한"}</div>
        <div>
          <span className={classes.highlight}>{"선순위"}</span>
          <span>{" 건설자금 투자 시장"}</span>
        </div>
      </div>
      <div className={classes.head}>
        <span className={classes.highlight}>{"유동산"}</span>
        <span>{"이 열어 드리겠습니다."}</span>
      </div>
    </div>
  );
};
