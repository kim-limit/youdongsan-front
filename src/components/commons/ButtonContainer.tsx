import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "400px",
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    display: "inline-block",
    position: "relative",
    color: "white",
    fontSize: "25px",
    backgroundColor: "transparent",
    border: "0",
    "&:hover": {
      fontWeight: "bold",
      cursor: "pointer",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "7px",
      top: "29px",
      left: 0,
      backgroundColor: "#4EC5D6",
      transformOrigin: "center",
      transition: "transform 0.25s ease-out",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "center",
    },
  },
  underLine: {
    textDecoration: "underline",
    textDecorationColor: "#4EC5D6",
    textDecorationThickness: "8px",
    fontWeight: "bold",
  },
});

interface IButtonContainerProps {
  path: string;
}

export const ButtonContainer = ({ path }: IButtonContainerProps) => {
  const classes = useStyles();
  const buttonList = [
    { text: "유동산", path: "/" },
    { text: "회사 소개", path: "/" },
    { text: "공지사항", path: "/notice" },
    { text: "FAQ", path: "/faq" },
  ];
  const [selected, setSelected] = useState(path);
  const navigate = useNavigate();
  const buttonHandler = (text: string, path: string) => {
    setSelected(text);
    navigate(path);
  };
  return (
    <div className={classes.root}>
      {buttonList.map((item) => {
        return (
          <p
            className={`${classes.btn} ${
              item.text === selected ? classes.underLine : ""
            }`}
            onClick={() => {
              buttonHandler(item.text, item.path);
            }}
          >
            {item.text}
          </p>
        );
      })}
    </div>
  );
};
