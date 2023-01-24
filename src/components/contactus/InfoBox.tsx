import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    border: "1px solid #469AA6",
    width: "416px",
    height: "49px",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },
});

interface IInfoProps {
  text: string;
}
export const InfoBox = ({ text }: IInfoProps) => {
  const classes = useStyles();
  return <div className={classes.root}>{text}</div>;
};
