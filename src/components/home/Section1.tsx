import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppImg1 from "../../assets/AppImg1.png";
import AppImg2 from "../../assets/AppImg2.png";
import { AppImgConatiner } from "./AppImgConatiner";
import { IntroduceText } from "./IntroduceText";
import { ReserveBtn } from "./ReserveBtn";

const useStyles = makeStyles({
  root: {
    // height: "100%",
  },
  text: {
    // height: "100%",
  },
  inner: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

interface IFirstContentProps {
  handleToReserve: () => void;
}
export const Section1 = ({ handleToReserve }: IFirstContentProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item container>
      <Grid className={classes.text} item sm={7} xs={12}>
        <div className={classes.inner}>
          <IntroduceText />
          <ReserveBtn handleToReserve={handleToReserve} />
        </div>
      </Grid>
      <AppImgConatiner leftImg={AppImg1} rightImg={AppImg2} />
    </Grid>
  );
};
