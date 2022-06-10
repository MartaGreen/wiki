import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    background: "#f5f6ff",
  },

  searchField: {
    width: "80%",
    maxWidth: 800,
    height: 60,

    display: "flex",
  },
  searchField__input: {
    flex: 1,

    border: "none",
    background: "none",
    borderBottom: "5px solid #815fcf",
    borderRadius: 5,

    padding: "0 25px",
    outline: "none",

    fontSize: 23,
  },
  searchField__btn: {
    width: "15%",
    minWidth: 80,
    background: "linear-gradient(135deg,#00C4FF,#9D1BB2)",

    padding: 5,
    border: "none",
    borderRadius: 10,

    marginLeft: 10,

    "&:before": {
      content: '"Найти город"',
      width: "100%",
      height: "100%",

      background: "#f5f6ff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      borderRadius: 5,

      fontSize: 15,
    },

    "&:hover": {
      cursor: "pointer",
      background: "linear-gradient(135deg,#9D1BB2,#00C4FF)",
    },
  },

  link: {
    textDecoration: "none",
    color: "#815fcf",
    fontSize: 23,

    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default styles;
