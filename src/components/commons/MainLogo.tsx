import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../.././assets/Logo.png";

const useStyles = makeStyles({
  root: {
    height: "30px",
    width: "420px",
    cursor: "pointer",
    paddingLeft: "30px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export const MainLogo = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/");
  };
  return (
    <div className={classes.root} onClick={buttonHandler}>
      <img className={classes.img} src={Logo} />
    </div>
  );
};
