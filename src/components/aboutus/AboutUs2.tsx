import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    fontSize: "16px",
  },
  title: {
    fontSize: "70px",
    paddingBottom: "50px",
    letterSpacing: "6px",
  },
  content: {
    lineHeight: "40px",
  },
  highlight: {
    color: "#4EC5D6",
  },
});

export const AboutUs2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {"We invest to "} <span className={classes.highlight}>{"Change"}</span>
        {" the world"}
      </div>
      <div className={classes.content}>
        <div>
          {
            "내가 투자하여 지어진 건물에 수 많은 사람들의 삶과 인생이 녹아 듭니다."
          }
        </div>
        <div>{"우리는 이러한 공간이 주는 가치를 세상에 제공하여 "}</div>
        <div>{"보다 많은 이들의 인생이야기를 담아내고 싶습니다."}</div>
      </div>
    </div>
  );
};
