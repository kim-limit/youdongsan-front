import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "20px",
    "@media (max-width: 600px)": {
      fontSize: "15px",
    },
  },
  inner: {
    marginBottom: "20px",
    "@media (max-width: 600px)": {
      marginBottom: "10px",
    },
  },
  input: {
    width: "85%",
    height: "67px",
    borderRadius: "15px",
    border: "solid 1px #fff",
    backgroundColor: "rgba(255, 255, 255, 0)",
    paddingLeft: "10px",
    fontSize: "20px",
    color: "white",
    marginTop: "5px",
    "@media (max-width: 1100px)": {
      fontSize: "13px",
      height: "50px",
    },
    "@media (max-width: 600px)": {
      width: "100%",
      height: "30px",
      borderRadius: "5px",
      fontSize: "15px",
    },
  },
  btn: {
    width: "85%",
    height: "67px",
    borderRadius: "15px",
    backgroundColor: "#4cbccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    "@media (max-width: 1100px)": {
      height: "50px",
    },
    "@media (max-width: 600px)": {
      width: "100%",
      height: "30px",
      borderRadius: "5px",
    },
  },
});
export const ReserveInputGroup = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div>{"이름"}</div>
        <input className={classes.input} placeholder={"이름 입력"}></input>
      </div>
      <div className={classes.inner}>
        <div>{"휴대폰 번호"}</div>
        <input
          className={classes.input}
          placeholder={"휴대폰 번호 입력"}
        ></input>
      </div>
      <div className={classes.inner}>
        <div>{"이메일"}</div>
        <input className={classes.input} placeholder={"이메일 입력"}></input>
      </div>
      <div className={classes.btn}>{"사전예약하기"}</div>
    </div>
  );
};
