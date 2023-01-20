import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppImg2 from "../../../assets/AppImg2.png";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    backgroundColor: "#4EC5D6",
  },
  img: {
    width: "80%",
    height: "100%",
  },
});

export const LastContent = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <img className={classes.img} src={AppImg2} />
    </Grid>
  );
};
