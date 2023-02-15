import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    height: "100%",
    width: "100%",
  },
  link: {
    height: "100%",
    width: "100%",
  },
});

interface IFooterBtnProps {
  img: string;
  path: string;
  width?: string;
  height?: string;
}

export const FooterBtn = ({ img, path, width, height }: IFooterBtnProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ height: height, width: width }}>
      <a className={classes.link} href={path} target="_blank" rel="noreferrer">
        <img className={classes.btn} src={img} alt={""} />
      </a>
    </div>
  );
};
