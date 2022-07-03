import { createUseStyles } from "react-jss";

import timeImage from "../../assets/time.jpeg";
import cityImage from "../../assets/city.jpeg";

const styles = createUseStyles({
  main: {
    // background: "linear-gradient(135deg,#00C4FF,#9D1BB2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 50,
    fontWeight: 400,
    color: "black",

    marginBottom: 40,
    textAlign: "center",
  },

  navigation: {
    minWidth: 300,
    maxWidth: 700,
    width: "80%",

    display: "flex",
    justifyContent: "center",

    fontSize: 25,
  },

  link: {
    width: 160,
    height: 180,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: "black",
    textDecoration: "none",

    boxShadow: "0 0 5px #c9c9c9",
    borderRadius: 10,
    margin: 30,
    padding: 20,

    transition: ".5s",

    "&:hover": {
      color: "#ffffff",
      alignItems: "flex-start",

      transform: "scale(0.98)",
      backgroundSize: "cover",
    },
  },

  link_time: {
    "&:hover": {
      backgroundImage: `url(${timeImage})`,
    },
  },
  link_city: {
    "&:hover": {
      backgroundImage: `url(${cityImage})`,
    },
  },

  "@media (max-width: 500px)": {
    link: {
      margin: 10,
      height: 130,
    },
  },
});

export default styles;
