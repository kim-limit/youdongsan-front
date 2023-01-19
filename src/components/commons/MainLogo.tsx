import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "90px",
    width: "546px",
    fontSize: "60px",
    color: "white",
    cursor: "pointer",
    letterSpacing: "20px",
    paddingLeft: "30px",
  },
  head: {
    color: "#4EC5D6",
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
      <span className={classes.head}>{"Y"}</span>
      <span>{"OUDONGSAN"}</span>
    </div>
  );
};
