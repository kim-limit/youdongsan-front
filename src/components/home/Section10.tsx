import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SolutionBox } from "./SolutionBox";
import { AppImgConatiner } from "./AppImgConatiner";
import AppImg5 from "../../assets/AppImg5.png";
import AppImg6 from "../../assets/AppImg6.png";

const useStyles = makeStyles({
  root: {
    height: "550px",
  },
});
export const Section10 = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item container>
      <Grid item sm={6} xs={12}>
        <SolutionBox
          head={"[소액투자]"}
          firstLine={"10,000원 으로도 가능한"}
          secondLine={"부동산 투자"}
        />
      </Grid>
      <Grid item sm={6} xs={12} textAlign={"center"}>
        <AppImgConatiner leftImg={AppImg5} rightImg={AppImg6} />
      </Grid>
    </Grid>
  );
};
