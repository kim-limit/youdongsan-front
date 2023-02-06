import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Logo from "../.././assets/Logo.png";

const useStyles = makeStyles({
  root: {
    height: "30px",
    width: "420px",
    cursor: "pointer",
    paddingLeft: "30px",
  },
  img: {
    width: "100%",
    height: "100%",
    "@media (max-width: 600px)": {
      width: "80%",
      height: "80%",
    },
  },
});

export const MainLogo = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/");
  };
  return (
    <div className={classes.root} onClick={buttonHandler}>
      <img className={classes.img} src={Logo} />
    </div>
  );
};
