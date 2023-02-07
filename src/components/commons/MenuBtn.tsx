import Menu from "../../assets/Menu.svg";
import Close from "../../assets/Close.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#282828",
    height: "30px",
    width: "40px",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      width: "30px",
      height: "20px",
    },
  },
  btn: {
    height: "100%",
    width: "100%",
  },
});

interface IMenuBtnProps {
  isToggle: boolean;
  handleIsToggle: () => void;
}

export const MenuBtn = ({ isToggle, handleIsToggle }: IMenuBtnProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={handleIsToggle}>
      <img className={classes.btn} src={isToggle ? Close : Menu} alt={"none"} />
    </div>
  );
};
