import { keyframes } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import { Reveal } from "react-awesome-reveal";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  inner: {
    marginRight: "10px",
  },
  img: {
    width: "80%",
    height: "80%",
  },
});

const customAnimationLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(200px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const customAnimationRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-150px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

interface IAppImgContainerProps {
  leftImg: string;
  rightImg: string;
}

export const AppImgConatiner = ({
  leftImg,
  rightImg,
}: IAppImgContainerProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Reveal keyframes={customAnimationLeft} duration={1500} delay={500}>
          <img className={classes.img} src={leftImg} />
        </Reveal>
      </div>
      <div>
        <Reveal keyframes={customAnimationRight} duration={1500} delay={500}>
          <img className={classes.img} src={rightImg} />
        </Reveal>
      </div>
    </div>
  );
};
