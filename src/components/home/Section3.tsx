import { makeStyles } from "@mui/styles";
import { Fade } from "react-awesome-reveal";

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: "48px",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: "20px",
    },
  },
  content: {
    fontSize: "32px",
    backgroundColor: "rgba(78, 197, 214, 0.75)",
    boxShadow: "inset 0 4px 4px 0 rgba(0, 0, 0, 0.37)",
    padding: "80px 63px 80px 63px",
    letterSpacing: "-0.64px",
    marginTop: "28px",
    lineHeight: "1.5",
    color: "#282828",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: "10px",
      padding: "30px 20px",
    },
  },
  hightlight: {
    color: "#fff",
    textDecoration: "underLine",
  },
});
export const Section3 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fade duration={2000} cascade>
        <div className={classes.title}>{"[선순위 투자란?]"}</div>
        <div className={classes.content}>
          <Fade cascade duration={2500}>
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
          </Fade>
        </div>
      </Fade>
    </div>
  );
};
