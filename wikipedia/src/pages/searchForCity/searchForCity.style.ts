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

    // padding: "40px 0",
  },

  searchField: {
    width: "50%",
    maxWidth: 800,
    height: 30,

    display: "flex",
    transition: ".7s",
    opacity: "80%",
    margin: "30px 0",
  },
  "searchField-onFocus": {
    transform: "scale(1.3)",
    margin: "40px 0",
    opacity: "100%",
  },
  searchField__input: {
    flex: 1,

    border: "none",
    background: "none",
    borderBottom: "5px solid #815fcf",
    borderRadius: 5,

    padding: "0 25px",
    outline: "none",

    fontSize: 18,
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

  article: {
    maxWidth: 1200,
    minWidth: 300,
    width: "80%",
  },
  article__title: {
    textAlign: "center",
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
