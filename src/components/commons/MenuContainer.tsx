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
    backgroundColor: "#333333",
  },
});

interface IMenuContainerProps {
  isToggle: boolean;
  text: string;
}

export const MenuContainer = ({ isToggle, text }: IMenuContainerProps) => {
  const classes = useStyles();
  return (
    <div className={`${isToggle ? classes.onClick : classes.root}`}>
      <MenuList text={text} />
    </div>
  );
};
