import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    position: "relative",
    color: "white",
    fontSize: "40px",
    height: "50px",
    width: "360px",
    margin: "5px",
    padding: "0 20px",
    backgroundColor: "transparent",
    "&:hover": {
      fontWeight: "bold",
      cursor: "pointer",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: "#4EC5D6",
      transformOrigin: "left",
      transition: "transform 0.25s ease-out",
      zIndex: "-1",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "left",
    },
  },
  underLine: {
    fontWeight: "bold",
    "&:after": {
      transform: "scaleX(1)",
    },
  },
});

interface IMenuListProps {
  handleIsToggle: () => void;
}

export const MenuList = ({ handleIsToggle }: IMenuListProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const buttonList = [
    { text: "HOME", path: "/" },
    { text: "ABOUT US", path: "/about" },
    { text: "NOTICE", path: "/notice" },
    { text: "FAQ", path: "/faq" },
    { text: "CONTACT US", path: "/contact" },
  ];
  const handleNavigate = (path: string) => {
    navigate(path);
    handleIsToggle();
  };
  return (
    <>
      {buttonList.map((item) => {
        return (
          <p
            className={`${classes.btn} ${
              item.path === location.pathname ? classes.underLine : ""
            }`}
            onClick={() => {
              handleNavigate(item.path);
            }}
            key={item.text}
          >
            {item.text}
          </p>
        );
      })}
    </>
  );
};
