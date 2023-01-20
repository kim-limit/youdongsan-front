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
  handleIsToggle: () => void;
}

export const NavBar = ({ isToggle, handleIsToggle }: INavBarProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <MenuBtn isToggle={isToggle} handleIsToggle={handleIsToggle} />
        <MainLogo />
      </div>
    </div>
  );
};
