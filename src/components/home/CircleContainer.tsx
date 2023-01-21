import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  normal: {
    width: "220px",
    height: "220px",
    backgroundColor: "#7D7D7D",
    fontSize: "30px",
  },
  highlight: {
    width: "320px",
    height: "320px",
    backgroundColor: "#4EC5D6",
    fontSize: "60px",
  },
});

interface ICircleConatinerProps {
  children?: React.ReactNode;
  isNormal: boolean;
}
export const CircleContainer = ({
  children,
  isNormal,
}: ICircleConatinerProps) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${
        isNormal ? classes.normal : classes.highlight
      }`}
    >
      {children}
    </div>
  );
};
