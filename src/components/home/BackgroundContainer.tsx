import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Fade } from "react-awesome-reveal";
import LeftLoad from "../../assets/LeftLoad.png";
import RightLoad from "../../assets/RightLoad.png";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1440px",
    maxHeight: "950px",
    margin: "0 auto",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  left: {
    backgroundImage: `url(${LeftLoad})`,
  },
  right: {
    backgroundImage: `url(${RightLoad})`,
  },
});

interface IBackgroundContainerProps {
  children?: React.ReactNode;
  isLeft: boolean;
}

export const BackgroundContainer = ({
  children,
  isLeft,
}: IBackgroundContainerProps) => {
  const classes = useStyles();
  return (
    <Fade duration={4000}>
      <Grid
        container
        className={`${classes.root} ${isLeft ? classes.left : classes.right}`}
      >
        {children}
      </Grid>
    </Fade>
  );
};
