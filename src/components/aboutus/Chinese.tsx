import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "70px",
    "@media (max-width: 600px)": {
      fontSize: "30px",
    },
  },
  red: {
    color: "#FF7A7A",
  },
  mint: {
    color: "#4CBCCC",
  },
});

interface IChineseProps {
  fontColor: string;
  text: string;
}
export const Chinese = ({ fontColor, text }: IChineseProps) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${
        fontColor === "white"
          ? ""
          : fontColor === "red"
          ? classes.red
          : classes.mint
      }`}
    >
      {text}
    </div>
  );
};
