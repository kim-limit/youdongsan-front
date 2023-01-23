import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "32px",
    width: "150px",
    textAlign: "center",
  },
  red: {
    color: "#FF7A7A",
  },
  mint: {
    color: "#4CBCCC",
  },
});

interface IMeaningProps {
  fontColor: string;
  text: string;
}
export const Meaning = ({ fontColor, text }: IMeaningProps) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${
        fontColor == "white"
          ? ""
          : fontColor == "red"
          ? classes.red
          : classes.mint
      }`}
    >
      {text}
    </div>
  );
};
