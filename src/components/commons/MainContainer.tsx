import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "100px 0",
    "@media (max-width: 600px)": {
      padding: "100px 30px 0 30px",
    },
  },
});

interface IMainContainerProps {
  children?: React.ReactNode;
}

export const MainContainer = (props: IMainContainerProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {props.children}
    </Grid>
  );
};
