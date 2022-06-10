import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  main: {
    background: "linear-gradient(135deg,#00C4FF,#9D1BB2)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: 60,
    fontWeight: 400,
    color: "#ffffff",

    margin: "10% 0 ",

    animationName: "$title",
    animationDuration: "2s",
    animationTimingFunction: "easy-out",
  },

  navigation: {
    minwidth: 300,
    maxWidth: 700,
    width: "80%",

    display: "flex",
    justifyContent: "space-between",

    fontSize: 25,

    animationName: "$navigation",
    animationDuration: "3s",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  "@keyframes title": {
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
  },
  "@keyframes navigation": {
    "0%": {
      zIndex: "-5",
      opacity: 0,
    },
    "70%": {
      opacity: 0,
    },
    "100%": {
      zIndex: 1,
      opacity: "100%",
    },
  },

  "@media (max-width:768px)": {
    main: {
      // justifyContent: "center",
      paddingTop: 100,
    },
    title: {
      fontSize: 30,
    },
  },
});

export default styles;
