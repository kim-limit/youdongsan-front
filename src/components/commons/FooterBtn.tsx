import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

interface IFooterBtnProps {
  img: string;
  path: string;
}

export const FooterBtn = ({ img, path }: IFooterBtnProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  };
  return (
    <div className={classes.root} onClick={handleNavigate}>
      <img src={img} />
    </div>
  );
};
