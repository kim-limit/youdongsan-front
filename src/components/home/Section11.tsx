import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SolutionBox } from "./SolutionBox";
import { AppImgConatiner } from "./AppImgConatiner";
import AppImg7 from "../../assets/AppImg7.png";
import AppImg8 from "../../assets/AppImg8.png";

const useStyles = makeStyles({
  root: {
    height: "550px",
  },
});
export const Section11 = () => {
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
          head={"[일할정산]"}
          firstLine={"투자한 금액의"}
          secondLine={"이자를 일할 정산"}
        />
      </Grid>
      <Grid item sm={6} xs={12} textAlign={"center"}>
        <AppImgConatiner leftImg={AppImg7} rightImg={AppImg8} />
      </Grid>
    </Grid>
  );
};
