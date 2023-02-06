import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SolutionBox } from "./SolutionBox";
import { AppImgConatiner } from "./AppImgConatiner";
import AppImg1 from "../../assets/AppImg1.png";
import AppImg2 from "../../assets/AppImg2.png";

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
      <Grid item sm={6} xs={12}>
        <AppImgConatiner leftImg={AppImg1} rightImg={AppImg2} />
      </Grid>
    </Grid>
  );
};
