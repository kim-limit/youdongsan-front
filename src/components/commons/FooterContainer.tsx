import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Footer } from "./Footer";
import { FooterText } from "./FooterText";
import { IndivText } from "./IndivText";
import { ModalContainer } from "./ModalContainer";
import { UseText } from "./UseText";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    position: "relative",
  },
});

interface IFooterContainerProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export const FooterContainer = ({
  isOpen,
  handleOpen,
  handleClose,
}: IFooterContainerProps) => {
  const classes = useStyles();
  const [isUse, setIsUse] = useState(true);
  const handleUse = () => {
    handleOpen();
    setIsUse(true);
  };
  const handleIndiv = () => {
    handleOpen();
    setIsUse(false);
  };
  return (
    <div className={classes.root}>
      <FooterText />
      <Footer handleUse={handleUse} handleIndiv={handleIndiv} />
      <ModalContainer isOpen={isOpen} handleClose={handleClose}>
        {isUse ? <UseText /> : <IndivText />}
      </ModalContainer>
    </div>
  );
};
