import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    maxWidth: "1240px",
    paddingTop: "180px",
    margin: "0 auto",
  },
});

export interface IMainContainerProps {
  children?: React.ReactNode;
}

export const MainContainer = (props: IMainContainerProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <div style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        {props.children}
      </div>
    </Grid>
  );
};
