import { makeStyles } from "@mui/styles";
import { Fade } from "react-awesome-reveal";
import Graph from "../../assets/Graph.png";
const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "@media (max-width: 600px)": {
      justifyContent: "center",
    },
  },
  contentContainer: {
    paddingBottom: "200px",
    "@media (max-width: 600px)": {
      paddingBottom: "80px",
    },
  },
  head: {
    fontSize: "48px",
    "@media (max-width: 600px)": {
      fontSize: "15px",
    },
  },
  content: {
    fontSize: "36px",
    textAlign: "end",
    "@media (max-width: 600px)": {
      fontSize: "15px",
    },
  },
  grey: {
    color: "rgba(255, 255, 255, 0.45)",
  },
  img: {
    backgroundImage: `url(${Graph})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  title: {
    fontSize: "40px",
    "@media (max-width: 600px)": {
      paddingBottom: "80px",
      textAlign: "center",
      fontSize: "16px",
    },
  },
});
export const Section5 = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.img}`}>
      <div className={classes.title}>{"[수익성]"}</div>
      <div className={classes.contentContainer}>
        <div className={classes.head}>
          <Fade cascade duration={1500}>
            <div className={classes.grey}> {"우량한"}</div>
            <div>{"돈 되는 투자"}</div>
          </Fade>
        </div>
        <div className={classes.content}>
          <Fade cascade delay={1000} duration={1000}>
            <div>{"평균 6.5%~8.5%,"}</div>
            <div>
              <span className={classes.grey}>{"예적금 대비"}</span>
              {" 2~3% 높은 수익"}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
