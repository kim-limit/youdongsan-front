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
    "@media (max-width: 600px)": {
      marginTop: "40px",
      height: "33px",
      width: "156px",
      borderRadius: "5px",
      fontSize: "14px",
    },
  },
  text: {
    paddingTop: "10px",
    fontSize: "20px",
    "@media (max-width: 1200px)": {
      fontSize: "15px",
    },
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
  },
});

interface IReserveBtnProps {
  handleToReserve: () => void;
}
export const ReserveBtn = ({ handleToReserve }: IReserveBtnProps) => {
  const classses = useStyles();

  return (
    <>
      <div className={classses.root} onClick={handleToReserve}>
        <div>{"사전 예약하기"}</div>
      </div>
      <div className={classses.text}>
        {
          "지금 신청하시는 6,000명께 1년 간 거래수수료 50% 할인 혜택을 들립니다."
        }
      </div>
    </>
  );
};
