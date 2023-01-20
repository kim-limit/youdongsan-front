import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Background from "../../../assets/Background.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export interface IBackgroundContainerProps {
  children?: React.ReactNode;
}

export const BackgroundContainer = ({
  children,
}: IBackgroundContainerProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {children}
    </Grid>
  );
};
