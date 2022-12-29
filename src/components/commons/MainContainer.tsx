import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  root: {
    background: "#404040",
    border: 0,
    borderRadius: 3,
    color: "black",
    height: "100vh",
    padding: "200px 200px",
  },
});

export interface MainContainerProps {
  children?: React.ReactNode;
}

export const MainContainer = (props: MainContainerProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {props.children}
    </Grid>
  );
};
