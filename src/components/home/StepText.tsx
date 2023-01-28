import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "20px",
    textAlign: "center",
  },
});

interface IStepTextProps {
  step: number;
  firstLine: string;
  secondLine: string;
}

export const StepText = ({ step, firstLine, secondLine }: IStepTextProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{`step ${step}.`}</div>
      <div>{firstLine}</div>
      <div>{secondLine}</div>
    </div>
  );
};
