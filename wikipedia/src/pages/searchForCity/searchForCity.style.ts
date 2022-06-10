import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  main: {
    height: "100%",
    minHeight: "100vh",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    background: "#f5f6ff",
  },

  link: {
    textDecoration: "none",
    color: "#815fcf",
    fontSize: 17,
    margin: "30px 0",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default styles;
