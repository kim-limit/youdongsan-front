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
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  },
  text: {
    height: "100%",
    paddingTop: "300px",
  },
});

interface IFirstContentProps {
  handleToReserve: () => void;
}
export const FirstContent = ({ handleToReserve }: IFirstContentProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item container xs={12}>
      <Grid className={classes.text} item xs={7}>
        <IntroduceText />
        <ReserveBtn handleToReserve={handleToReserve} />
      </Grid>
      <AppImgConatiner leftImg={AppImg1} rightImg={AppImg2} />
    </Grid>
  );
};
