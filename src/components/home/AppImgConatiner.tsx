import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
  return (
    <Grid className={classes.root} item container sm={5} xs={12} spacing={3}>
      <Grid item xs={6}>
        <img className={classes.img} src={leftImg} />
      </Grid>
      <Grid item xs={6}>
        <img className={classes.img} src={rightImg} />
      </Grid>
    </Grid>
  );
};
