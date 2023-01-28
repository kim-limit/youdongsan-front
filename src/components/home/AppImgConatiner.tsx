import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { animated, useSpring } from "@react-spring/web";

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

interface IAppImgContainerProps {
  leftImg: string;
  rightImg: string;
}

export const AppImgConatiner = ({
  leftImg,
  rightImg,
}: IAppImgContainerProps) => {
  const classes = useStyles();

  const left = useSpring({
    from: { x: 100 },
    to: { x: 0 },
    config: {
      tension: 100,
    },
  });
  const right = useSpring({
    from: { x: -100 },
    to: { x: 0 },
    config: {
      tension: 100,
    },
  });

  return (
    <Grid className={classes.root} item container sm={5} xs={12} spacing={3}>
      <Grid item xs={6}>
        <animated.img
          style={{ ...left }}
          className={classes.img}
          src={leftImg}
        />
      </Grid>
      <Grid item xs={6}>
        <animated.img
          style={{ ...right }}
          className={classes.img}
          src={rightImg}
        />
      </Grid>
    </Grid>
  );
};
