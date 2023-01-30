import { keyframes } from "@emotion/react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Reveal } from "react-awesome-reveal";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

const customAnimationLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(200px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const customAnimationRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

interface IAppImgContainerProps {
  leftImg: string;
  rightImg: string;
}

export const AppImgConatiner = ({
  leftImg,
  rightImg,
}: IAppImgContainerProps) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item container sm={5} xs={12} spacing={3}>
      <Grid item xs={6}>
        <Reveal keyframes={customAnimationLeft} duration={1500}>
          <img className={classes.img} src={leftImg} />
        </Reveal>
      </Grid>
      <Grid item xs={6}>
        <Reveal keyframes={customAnimationRight} duration={1500}>
          <img className={classes.img} src={rightImg} />
        </Reveal>
      </Grid>
    </Grid>
  );
};
