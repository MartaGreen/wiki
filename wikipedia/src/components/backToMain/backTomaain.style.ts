import { createUseStyles } from "react-jss";

const styles = createUseStyles({
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
