import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IReserveProps } from "../../interface/reserve";
import { ReserveInputGroup } from "./ReserveInputGroup";

const useStyles = makeStyles({
  title: {
    fontSize: "30px",
    letterSpacing: "4.8px",
    "@media (max-width: 1100px)": {
      fontSize: "20px",
    },
    "@media (max-width: 600px)": {
      fontSize: "16px",
    },
  },
  content: {
    paddingTop: "80px",
    fontSize: "20px",
    lineHeight: "1.75",
    letterSpacing: "2px",
    "@media (max-width: 1100px)": {
      paddingTop: "60px",
      fontSize: "15px",
    },
    "@media (max-width: 600px)": {
      fontSize: "10px",
      paddingTop: "10px",
    },
  },
  highlight: {
    color: "#54EAFF",
  },
  btn: {
    width: "300px",
    height: "48.5px",
    backgroundColor: "#4cbccc",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    "@media (max-width: 600px)": {
      marginTop: "5px",
      width: "100%",
      height: "30px",
      borderRadius: "5px",
    },
  },
  checkbox: {
    paddingTop: "20px",
    fontSize: "12px",
    "@media (max-width: 1100px)": {
      zoom: "0.9",
    },
    "@media (max-width: 600px)": {
      paddingTop: "10px",
      zoom: "0.6",
    },
  },
});

interface ISection12Props {
  info: IReserveProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export const Section12 = ({ info, onChange, onClick }: ISection12Props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={8} xs={12}>
        <div className={classes.title}>
          {"지금 신청하시는 분들꼐"}
          <div>
            <span className={classes.highlight}>
              {"1년간 거래수수료 50% 할인 혜택"}
            </span>
            {"을 드립니다!"}
          </div>
          {"6000 명 선착순"}
        </div>
        <div className={classes.content}>
          <div>
            {"출시 전, "}
            <span className={classes.highlight}>{"선순위 채권"}</span>
            {"과"}
            <span className={classes.highlight}>{"부동산 투자 스터디"}</span>
            {"를 원하시는 분들은"}
          </div>
          <div>
            {"아래 "}
            <span className={classes.highlight}>{"오픈카톡방"}</span>
            {"에서 "}
            <span className={classes.highlight}>{"교육"}</span>
            {" 및 "}
            <span className={classes.highlight}>{"정보 제공"}</span>
            {"을 드리고 있습니다."}
          </div>
          <div className={classes.btn}>{"오픈카톡방 바로가기"}</div>
          <div className={classes.checkbox}>
            <div>
              <input
                name={"firstCheck"}
                checked={info.firstCheck}
                type={"checkbox"}
                onChange={onChange}
              />
              {
                "유동산 서비스 출시 이후, 사전예약과 동일한 정보로 투자 계좌개설까지 완료되면 투자 포인트가 지급됩니다."
              }
            </div>
            <div>
              <input
                name={"secondCheck"}
                checked={info.firstCheck}
                type={"checkbox"}
                onChange={onChange}
              />
              {
                "서비스 안내 및 이벤트 혜택 제공을 위한 개인정보 수집에 동의합니다."
              }
            </div>
          </div>
        </div>
      </Grid>
      <Grid item sm={4} xs={12}>
        <ReserveInputGroup info={info} onChange={onChange} onClick={onClick} />
      </Grid>
    </Grid>
  );
};
