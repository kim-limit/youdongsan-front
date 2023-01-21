import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppImg2 from "../../assets/AppImg2.png";

const useStyles = makeStyles({
  root: {
    height: "100%",
    textAlign: "center",
  },
  img: {
    width: "75%",
    height: "100%",
  },
});

export const LastContent = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <img className={classes.img} src={AppImg2} alt={"appImg"} />
    </Grid>
  );
};
