import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppImg1 from "../../../assets/AppImg1.png";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  },
  img: {
    width: "50%",
    height: "90%",
  },
});

export const FirstContent = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <img className={classes.img} src={AppImg1} />
    </Grid>
  );
};
