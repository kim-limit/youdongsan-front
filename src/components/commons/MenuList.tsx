import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

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
  text: string;
}

export const MenuList = ({ text }: IMenuListProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const buttonList = [
    { text: "HOME", path: "/" },
    { text: "ABOUT US", path: "/" },
    { text: "NOTICE", path: "/notice" },
    { text: "FAQ", path: "/faq" },
    { text: "CONTACT US", path: "/" },
  ];
  const navigateHandler = (path: string) => {
    navigate(path);
  };
  return (
    <>
      {buttonList.map((item) => {
        return (
          <p
            className={`${classes.btn} ${
              item.text === text ? classes.underLine : ""
            }`}
            onClick={() => {
              navigateHandler(item.path);
            }}
          >
            {item.text}
          </p>
        );
      })}
    </>
  );
};
