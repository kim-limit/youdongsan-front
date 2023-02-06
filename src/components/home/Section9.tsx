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
export const Section9 = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      item
      container
      direction={{ xs: "row", sm: "row-reverse" }}
    >
      <Grid item sm={6} xs={12}>
        <SolutionBox
          head={"[환금성]"}
          firstLine={"언제든지 환금 할 수 있는"}
          secondLine={"부동산 투자"}
        />
      </Grid>
      <Grid item sm={6} xs={12}>
        <AppImgConatiner leftImg={AppImg1} rightImg={AppImg2} />
      </Grid>
    </Grid>
  );
};
