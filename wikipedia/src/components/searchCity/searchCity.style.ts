import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  searchField: {
    width: "50%",
    maxWidth: 800,
    minWidth: 280,
    height: 30,

    display: "flex",
    justifyContent: "center",
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

    padding: "0 15px",
    outline: "none",

    fontSize: 18,
    textTransform: "capitalize",
  },
  searchField__btn: {
    width: "15%",
    minWidth: 120,
    background: "linear-gradient(135deg,#00C4FF,#9D1BB2)",

    padding: 5,
    border: "none",
    borderRadius: 10,
    outline: "none",

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

  "@media (max-width: 400px)": {
    searchField: {
      width: "80%",
    },
    "searchField-onFocus": {
      transform: "scale(1.1)",
    },
    searchField__input: {
      // flex: 0,
      fontSize: 13,
    },
    searchField__btn: {
      minWidth: 80,

      "&:before": {
        fontSize: 11,
      },
    },
  },
});

export default styles;
