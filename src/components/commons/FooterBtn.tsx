import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    height: "100%",
    width: "100%",
  },
});

interface IFooterBtnProps {
  img: string;
  path: string;
  width?: string;
  height?: string;
}

export const FooterBtn = ({ img, path, width, height }: IFooterBtnProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  };
  return (
    <div
      className={classes.root}
      onClick={handleNavigate}
      style={{ height: height, width: width }}
    >
      <img className={classes.btn} src={img} alt={""} />
    </div>
  );
};
