import { makeStyles } from "@mui/styles";
import { MenuList } from "./MenuList";

const useStyles = makeStyles({
  root: {
    display: "none",
  },
  onClick: {
    display: "flex",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "80",
    backgroundColor: "#282828",
  },
});

interface IMenuContainerProps {
  isToggle: boolean;
  handleIsToggle: () => void;
}

export const MenuContainer = ({
  isToggle,
  handleIsToggle,
}: IMenuContainerProps) => {
  const classes = useStyles();
  return (
    <div className={`${isToggle ? classes.onClick : classes.root}`}>
      <MenuList handleIsToggle={handleIsToggle} />
    </div>
  );
};
