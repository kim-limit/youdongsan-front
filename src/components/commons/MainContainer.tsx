import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import { theme } from "../../theme";

const useStyles = makeStyles({
  root: {
    // background: theme.palette.primary.main,
    height: "100vh",
    padding: "180px 200px 100px 200px",
    margin: "0px",
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
