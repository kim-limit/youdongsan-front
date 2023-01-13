import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "70px",
    width: "200px",
    fontSize: "60px",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
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
      {"유동산"}{" "}
    </div>
  );
};
