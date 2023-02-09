import { makeStyles } from "@mui/styles";
import Insta from "../../assets/Insta.svg";
import PlayStore from "../../assets/PlayStore.svg";
import Apple from "../../assets/Apple.svg";
import { FooterBtn } from "./FooterBtn";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "0px",
    zIndex: "100",
    height: "168px",
    width: "100vw",
    padding: "0 40px",
    "@media (max-width: 600px)": {
      height: "100px",
    },
  },
  inner: {
    display: "flex",
    maxWidth: "1440px",
    margin: "0 auto",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btns: {
    display: "flex",
    width: "88px",
    justifyContent: "space-between",
  },
  copyright: {
    fontSize: "14px",
  },
});

export const AppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.btns}>
          <FooterBtn img={Apple} path={"/"} />
          <FooterBtn img={PlayStore} path={"/"} />
          <FooterBtn img={Insta} path={"/"} />
        </div>
        <div className={classes.copyright}>{"© 2023 Youdongsan"}</div>
      </div>
    </div>
  );
};
