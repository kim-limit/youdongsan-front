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
});

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>{"ABOUT US"}</div>
      <div className={classes.content}>
        <div>
          {
            "유동산은 움직이지  않는 부동산을 유동화하여 움직이게 한다는 뜻으로, "
          }
        </div>
        <div>
          {
            "’기존의 부동산이 가지고 있던 한계를 기술적으로 풀어내어 경색되어 있는 금융 시장에 새로운 활기를 만들어내자’ 라는 의미입니다."
          }
        </div>
        <div>
          {
            "부동산 투자의 높은 진입장벽을 허물고 부동산 시장의 유동성을 공급하는 것을 목표로 달려가고 있습니다."
          }
        </div>
      </div>
    </div>
  );
};
