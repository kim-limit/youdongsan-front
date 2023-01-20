import { makeStyles } from "@mui/styles";
import React from "react";
import Apple from "../../assets/Apple.svg";
import PlayStore from "../../assets/PlayStore.svg";
import Insta from "../../assets/Insta.svg";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "0px",
    zIndex: "100",
    height: "150px",
    width: "100vw",
    padding: "0 40px",
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
    width: "100px",
    justifyContent: "space-between",
  },
  copyright: {
    fontSize: "14px",
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.btns}>
          <img src={Apple} />
          <img src={PlayStore} />
          <img src={Insta} />
        </div>
        <div className={classes.copyright}>{"© 2023 Youdongsan"}</div>
      </div>
    </div>
  );
};
