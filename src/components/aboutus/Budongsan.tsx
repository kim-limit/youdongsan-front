import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Fade } from "react-awesome-reveal";
import { Chinese } from "./Chinese";
import { Meaning } from "./Meaning";
import { Sound } from "./Sound";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export const BudongSan = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={6}>
      <Grid item sm={6} xs={12}>
        <Fade cascade duration={500}>
          <div className={classes.wrapper}>
            <Chinese fontColor={"white"} text={"不"} />
            <Meaning fontColor={"red"} text={"아니"} />
            <Sound fontColor={"red"} text={"부"} />
          </div>
          <div className={classes.wrapper}>
            <Chinese fontColor={"white"} text={"動"} />
            <Meaning fontColor={"white"} text={"움직일"} />
            <Sound fontColor={"white"} text={"동"} />
          </div>
          <div className={classes.wrapper}>
            <Chinese fontColor={"white"} text={"産"} />
            <Meaning fontColor={"white"} text={"낳을"} />
            <Sound fontColor={"white"} text={"산"} />
          </div>
        </Fade>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Fade cascade delay={700} duration={500}>
          <div className={classes.wrapper}>
            <Chinese fontColor={"mint"} text={"流"} />
            <Meaning fontColor={"mint"} text={"흐를"} />
            <Sound fontColor={"mint"} text={"유"} />
          </div>
          <div className={classes.wrapper}>
            <Chinese fontColor={"white"} text={"動"} />
            <Meaning fontColor={"white"} text={"움직일"} />
            <Sound fontColor={"white"} text={"동"} />
          </div>
          <div className={classes.wrapper}>
            <Chinese fontColor={"white"} text={"産"} />
            <Meaning fontColor={"white"} text={"낳을"} />
            <Sound fontColor={"white"} text={"산"} />
          </div>
        </Fade>
      </Grid>
    </Grid>
  );
};
