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
export const Section11 = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item container>
      <Grid item sm={8}>
        <AppImgConatiner leftImg={AppImg1} rightImg={AppImg2} />
      </Grid>
      <Grid item sm={4}>
        <SolutionBox
          head={"[일할정산]"}
          firstLine={"투자한 금액의"}
          secondLine={"이자를 일할 정산"}
        />
      </Grid>
    </Grid>
  );
};
