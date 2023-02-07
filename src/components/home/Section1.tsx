import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppImg1 from "../../assets/AppImg1.png";
import AppImg2 from "../../assets/AppImg2.png";
import { AppImgConatiner } from "./AppImgConatiner";
import { IntroduceText } from "./IntroduceText";
import { ReserveBtn } from "./ReserveBtn";

const useStyles = makeStyles({
  root: {
    height: "100%",
    "@media (max-width: 600px)": {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  text: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  inner: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      alignItems: "center",
    },
  },
});

interface IFirstContentProps {
  handleToReserve: () => void;
}
export const Section1 = ({ handleToReserve }: IFirstContentProps) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      item
      container
      direction={{ xs: "column", sm: "row" }}
    >
      <Grid className={classes.text} item sm={6} xs={4}>
        <div className={classes.inner}>
          <IntroduceText />
          <ReserveBtn handleToReserve={handleToReserve} />
        </div>
      </Grid>
      <Grid item sm={6} xs={6}>
        <AppImgConatiner leftImg={AppImg1} rightImg={AppImg2} />
      </Grid>
    </Grid>
  );
};
