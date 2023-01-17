import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "none",
  },
  onClick: {
    display: "block",
  },
  btn: {
    display: "block",
    position: "relative",
    textAlign: "center",
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
interface IMenuBar {
  isToggle: boolean;
  text: string;
}

export const MenuBar = ({ isToggle, text }: IMenuBar) => {
  const classes = useStyles();
  const buttonList = [
    { text: "HOME", path: "/" },
    { text: "ABOUT US", path: "/" },
    { text: "NOTICE", path: "/notice" },
    { text: "FAQ", path: "/faq" },
    { text: "CONTACT US", path: "/" },
  ];
  const navigate = useNavigate();
  const navigateHandler = (text: string, path: string) => {
    navigate(path);
  };
  return (
    <div className={`${isToggle ? classes.onClick : classes.root}`}>
      {buttonList.map((item) => {
        return (
          <p
            className={`${classes.btn} ${
              item.text === text ? classes.underLine : ""
            }`}
            onClick={() => {
              navigateHandler(item.text, item.path);
            }}
          >
            {item.text}
          </p>
        );
      })}
    </div>
  );
};
