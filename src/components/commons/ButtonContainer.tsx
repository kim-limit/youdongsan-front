import { makeStyles, Theme } from "@material-ui/core";

import React, { useState } from "react";

interface StyleProps {
  selected: string;
}
const useStyles = makeStyles<Theme, StyleProps>((Theme) => ({
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
  mainBtn: {
    textDecoration: ({ selected }) =>
      selected === "유동산" ? "underline" : "none",
    textDecorationColor: ({ selected }) =>
      selected === "유동산" ? "#4EC5D6" : "white",
    textDecorationThickness: ({ selected }) =>
      selected === "유동산" ? "8px" : "0px",
    fontWeight: ({ selected }) => (selected === "유동산" ? "bold" : "bold"),
  },
  introduceBtn: {
    textDecoration: ({ selected }) =>
      selected === "회사 소개" ? "underline" : "none",
    textDecorationColor: ({ selected }) =>
      selected === "회사 소개" ? "#4EC5D6" : "white",
    textDecorationThickness: ({ selected }) =>
      selected === "회사 소개" ? "8px" : "0px",
    fontWeight: ({ selected }) => (selected === "회사 소개" ? "bold" : "bold"),
  },
  noticeBtn: {
    textDecoration: ({ selected }) =>
      selected === "공지사항" ? "underline" : "none",
    textDecorationColor: ({ selected }) =>
      selected === "공지사항" ? "#4EC5D6" : "white",
    textDecorationThickness: ({ selected }) =>
      selected === "공지사항" ? "8px" : "0px",
    fontWeight: ({ selected }) => (selected === "공지사항" ? "bold" : "bold"),
  },
  faqBtn: {
    textDecoration: ({ selected }) =>
      selected === "FAQ" ? "underline" : "none",
    textDecorationColor: ({ selected }) =>
      selected === "FAQ" ? "#4EC5D6" : "white",
    textDecorationThickness: ({ selected }) =>
      selected === "FAQ" ? "8px" : "0px",
    fontWeight: ({ selected }) => (selected === "FAQ" ? "bold" : "bold"),
  },
}));

export const ButtonContainer = () => {
  const [selected, setSelected] = useState("유동산");
  const classes = useStyles({
    selected,
  });

  const buttonHandler = (e: React.MouseEvent<HTMLElement>) => {
    setSelected(e.currentTarget.innerHTML);
  };

  return (
    <div>
      <button
        className={`${classes.btn} ${classes.mainBtn}`}
        onClick={buttonHandler}
      >
        {"유동산"}
      </button>
      <button
        className={`${classes.btn} ${classes.introduceBtn}`}
        onClick={buttonHandler}
      >
        {"회사 소개"}
      </button>
      <button
        className={`${classes.btn} ${classes.noticeBtn}`}
        onClick={buttonHandler}
      >
        {"공지사항"}
      </button>
      <button
        className={`${classes.btn} ${classes.faqBtn}`}
        onClick={buttonHandler}
      >
        {"FAQ"}
      </button>
    </div>
  );
};
