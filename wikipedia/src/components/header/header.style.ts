import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  header: {
    maxHeight: 1200,
    height: "8vh",

    padding: "0 2%",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    background: "#efefef",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: 17,
    margin: "30px 0",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  link__icon: {
    height: 7,
    width: 7,

    borderBottom: "2px solid black",
    borderLeft: "2px solid black",

    transform: "rotate(45deg)",
    marginRight: 5,
  },
});

export default styles;
