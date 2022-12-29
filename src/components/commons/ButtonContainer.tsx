import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  btn: {
    color: "white",
    fontSize: "25px",
    background: "#404040",
    border: "0",
    width: "120px",
    height: "30px",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#4EC5D6",
      textDecorationThickness: "8px",
      fontWeight: "bold",
    },
  },
});

export const ButtonContainer = () => {
  const classes = useStyles();
  return (
    <div>
      <button className={classes.btn}>{"유동산"}</button>
      <button className={classes.btn}>{"회사 소개"}</button>
      <button className={classes.btn}>{"공지사항"}</button>
      <button className={classes.btn}>{"FAQ"}</button>
    </div>
  );
};
