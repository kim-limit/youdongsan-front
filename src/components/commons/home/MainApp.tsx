import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MainAppImg from "../../../assets/MainAppImg.png";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  },
  img: {
    width: "50%",
    height: "90%",
  },
});

export const MainApp = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <img className={classes.img} src={MainAppImg} />
    </Grid>
  );
};
