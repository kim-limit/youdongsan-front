import { keyframes } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import { Fade, Reveal } from "react-awesome-reveal";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "48px",
    letterSpacing: "4.8px",
    "@media (max-width: 1200px)": {
      fontSize: "28px",
    },
    "@media (max-width: 600px)": {
      fontSize: "20px",
    },
  },
  content: {
    paddingTop: "35px",
    fontSize: "20px",
    "@media (max-width: 1200px)": {
      fontSize: "15px",
    },
    "@media (max-width: 600px)": {
      fontSize: "10px",
      paddingTop: "10px",
    },
  },
  highlight: {
    color: "#54EAFF",
  },
});

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const IntroduceText = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Reveal keyframes={customAnimation} duration={1200}>
        <div className={classes.title}>
          {"은행에 "} <span className={classes.highlight}>{"돈"}</span>
          {" 맡기지 마세요!"}
        </div>
        <div className={classes.title}>
          {"은행과 "}
          <span className={classes.highlight}>{"같이 투자"}</span>
          {" 하세요"}
        </div>
      </Reveal>
      <Reveal keyframes={customAnimation} duration={1500}>
        <div className={classes.content}>
          {"투자한 돈 가장 먼저 돌려받는 부동산 선순위 투자"}
        </div>
      </Reveal>
    </div>
  );
};
