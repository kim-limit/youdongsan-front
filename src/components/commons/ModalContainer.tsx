import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "65%",
    width: "80%",
    overflow: "scroll",
    backgroundColor: "#333333",
    padding: "10px 30px",
  },
  close: {
    textAlign: "end",
    fontSize: "30px",
    cursor: "pointer",
  },
});
interface IModalContainerProps {
  children?: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
export const ModalContainer = (props: IModalContainerProps) => {
  const classes = useStyles();
  return (
    <>
      {props.isOpen ? (
        <div className={classes.root}>
          <div className={classes.close} onClick={props.handleClose}>
            {"x"}
          </div>
          <div>{props.children}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
