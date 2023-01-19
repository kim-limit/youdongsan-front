import Menu from "../../assets/Menu.svg";
import Close from "../../assets/Close.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#333333",
    height: "40px",
    width: "30px",
    cursor: "pointer",
  },
  btn: {
    height: "100%",
    width: "100%",
  },
});

interface IMenuBtnProps {
  isToggle: boolean;
  toggleHandler: () => void;
}

export const MenuBtn = ({ isToggle, toggleHandler }: IMenuBtnProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={toggleHandler}>
      <img className={classes.btn} src={isToggle ? Close : Menu} />
    </div>
  );
};
