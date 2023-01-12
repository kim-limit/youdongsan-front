import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    color: "white",
    fontSize: "25px",
    backgroundColor: "transparent",
    border: "0",
    width: "120px",
    height: "30px",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#4EC5D6",
      textDecorationThickness: "8px",
      fontWeight: "bold",
    },
  },
  underLine: {
    textDecoration: "underline",
    textDecorationColor: "#4EC5D6",
    textDecorationThickness: "8px",
    fontWeight: "bold",
  },
});

export const ButtonContainer = () => {
  const classes = useStyles();
  const buttonList = [
    { text: "유동산", path: "/" },
    { text: "회사 소개", path: "/" },
    { text: "공지사항", path: "/notice" },
    { text: "FAQ", path: "/faq" },
  ];
  const [selected, setSelected] = useState("유동산");
  const navigate = useNavigate();
  const buttonHandler = (text: string, path: string) => {
    setSelected(text);
    navigate(path);
  };
  return (
    <div>
      {buttonList.map((item) => {
        return (
          <button
            className={`${classes.btn} ${
              item.text === selected ? classes.underLine : ""
            }`}
            onClick={() => {
              buttonHandler(item.text, item.path);
            }}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
};
