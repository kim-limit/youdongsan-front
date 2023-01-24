import { makeStyles } from "@mui/styles";
import { InfoBox } from "./InfoBox";

const useStyles = makeStyles({
  root: {
    width: "90%",
    textAlign: "center",
  },
  titleBox: {
    width: "100%",
    borderBottomColor: "#b0b3b9",
    borderBottom: "1px solid #b0b3b9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "200px",
  },
  title: {
    fontSize: "60px",
    letterSpacing: "6px",
  },
  content: {
    fontSize: "16px",
  },
  InfoBox: {
    height: "250px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
export const ContactUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <div className={classes.title}>{"CONTACT US"}</div>
        <div className={classes.content}>
          {"유동산이 신속하고 정확하게 답변해드리겠습니다."}
        </div>
      </div>
      <div className={classes.InfoBox}>
        <InfoBox text={"adm.youdongsan@gmail.com"} />
        <InfoBox text={"6시간"} />
      </div>
    </div>
  );
};
