import { makeStyles } from "@mui/styles";
import { MainLogo } from "./MainLogo";
import { MenuBtn } from "./MenuBtn";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "0px",
    zIndex: "100",
    height: "180px",
    width: "100vw",
    padding: "0 40px",
  },
  inner: {
    display: "flex",
    maxWidth: "1440px",
    margin: "0 auto",
    height: "100%",
    justifyContent: "start",
    alignItems: "center",
  },
});

interface INavBarProps {
  isToggle: boolean;
  toggleHandler: () => void;
}

export const NavBar = ({ isToggle, toggleHandler }: INavBarProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <MenuBtn isToggle={isToggle} toggleHandler={toggleHandler} />
        <MainLogo />
      </div>
    </div>
  );
};
