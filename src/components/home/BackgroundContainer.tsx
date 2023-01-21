import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Background from "../../assets/Background.png";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  color: {
    backgroundColor: "#4CBCCC",
  },
});

interface IBackgroundContainerProps {
  children?: React.ReactNode;
  isImg: boolean;
}

export const BackgroundContainer = ({
  children,
  isImg,
}: IBackgroundContainerProps) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={`${classes.root} ${isImg ? classes.img : classes.color}`}
    >
      {children}
    </Grid>
  );
};
