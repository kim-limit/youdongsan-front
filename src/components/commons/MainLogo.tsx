import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Logo from "../.././assets/Logo.png";

const useStyles = makeStyles({
  root: {
    height: "30px",
    width: "420px",
    cursor: "pointer",
    paddingLeft: "30px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 600px)": {
      paddingLeft: "20px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    "@media (max-width: 600px)": {
      width: "70%",
      height: "50%",
    },
  },
});

export const MainLogo = () => {
  const classes = useStyles();
  const buttonHandler = () => {
    window.location.href = "/";
  };
  return (
    <div className={classes.root} onClick={buttonHandler}>
      <img className={classes.img} src={Logo} />
    </div>
  );
};
