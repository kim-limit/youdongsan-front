import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "210px",
    height: "63px",
    cursor: "pointer",
    backgroundColor: "#33929F",
    borderRadius: "15px",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
  },
});

interface IReserveBtnProps {
  handleToReserve: () => void;
}
export const ReserveBtn = ({ handleToReserve }: IReserveBtnProps) => {
  const classses = useStyles();

  return (
    <div className={classses.root} onClick={handleToReserve}>
      <div>{"사전 예약하기"}</div>
    </div>
  );
};
