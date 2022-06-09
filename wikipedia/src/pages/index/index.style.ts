import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  main: {
    height: "100vh",
    background: "linear-gradient(135deg,#00C4FF,#9D1BB2)",

    display: "flex",
    justifyContent: "center",
  },

  title: {
    fontSize: 60,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    color: "#ffffff",

    marginTop: "10%",

    animationName: "$title",
    animationDuration: "2s",
    animationTimingFunction: "easy-out",
  },

  "@keyframes title": {
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
  },
});

export default styles;
