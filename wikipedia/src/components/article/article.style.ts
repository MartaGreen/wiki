import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  article: {
    maxWidth: 1200,
    minWidth: 300,
    width: "80%",
  },
  article__title: {
    textAlign: "center",
  },

  errorMsg: {
    fontSize: 30,
    textAlign: "center",
    color: "red",
  },
});

export default styles;
