import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "20px",
    textAlign: "center",
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
  },
});

interface IStepTextProps {
  step: number;
  firstLine: string;
  secondLine: string;
  thirdLine?: string;
}

export const StepText = ({
  step,
  firstLine,
  secondLine,
  thirdLine,
}: IStepTextProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{`step ${step}.`}</div>
      <div>{firstLine}</div>
      <div>{secondLine}</div>
      <div>{thirdLine}</div>
    </div>
  );
};
