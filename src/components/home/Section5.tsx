import { makeStyles } from "@mui/styles";
import Graph from "../../assets/Graph.png";
const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head: {
    fontSize: "48px",
    paddingBottom: "300px",
    "@media (max-width: 600px)": {
      fontSize: "18px",
    },
  },
  content: {
    fontSize: "36px",
    paddingTop: "200px",
    "@media (max-width: 600px)": {
      fontSize: "18px",
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
    paddingBottom: "100px",
  },
});
export const Section5 = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.img}`}>
      <div className={classes.head}>
        <div className={classes.title}>{"[수익성]"}</div>
        <div className={classes.grey}> {"우량한"}</div>
        <div>{"돈 되는 투자"}</div>
      </div>
      <div className={classes.content}>
        <div>{"평균 6.5%~8.5%,"}</div>
        <div>
          <span className={classes.grey}>{"예적금 대비"}</span>
          {" 2~3% 높은 수익"}
        </div>
      </div>
    </div>
  );
};
