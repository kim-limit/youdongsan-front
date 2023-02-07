import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SolutionBox } from "./SolutionBox";
import { AppImgConatiner } from "./AppImgConatiner";
import AppImg3 from "../../assets/AppImg3.png";
import AppImg4 from "../../assets/AppImg4.png";

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
      <Grid item sm={6} xs={12} textAlign={"center"}>
        <AppImgConatiner leftImg={AppImg3} rightImg={AppImg4} />
      </Grid>
    </Grid>
  );
};
