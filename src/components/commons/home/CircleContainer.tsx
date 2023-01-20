import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: "50%",
    width: "220px",
    height: "220px",
    backgroundColor: "#7D7D7D",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    color: "#000000",
  },
});

interface ICircleConatinerProps {
  children?: React.ReactNode;
}
export const CircleContainer = ({ children }: ICircleConatinerProps) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
