import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: "48px",
    textAlign: "center",
  },
  content: {
    fontSize: "32px",
    backgroundColor: "#3F3D3D",
    boxShadow: "inset 0 4px 4px 0 rgba(0, 0, 0, 0.37)",
    padding: "80px 33px 80px 32px",
    marginTop: "28px",
    lineHeight: "1.47",
  },
  hightlight: {
    color: "#4CBCCC",
  },
});
export const Section3 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>{"[선순위 투자]"}</div>
      <div className={classes.content}>
        <div>
          {"선순위 투자는 투자 시 원금과 이자를 "}{" "}
          <span className={classes.hightlight}>{"가장 먼저"}</span>
          {" 받을 수 있는 투자입니다"}
        </div>
        <div>{"우선순위로 투자금을 회수 할 수 있기 때문에,"}</div>
        <div>
          <span className={classes.hightlight}>{"수익률 대비 안전"}</span>
          {"하다는 특징을 가지고 있습니다."}
        </div>
      </div>
    </div>
  );
};
