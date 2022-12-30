import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  root: {
    background: "#404040",
    height: "100vh",
    padding: "180px 200px 100px 200px",
  },
});

export interface MainContainerProps {
  children?: React.ReactNode;
}

export const MainContainer = (props: MainContainerProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <div style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        {props.children}
      </div>
    </Grid>
  );
};
