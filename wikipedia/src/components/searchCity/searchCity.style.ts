import { createUseStyles } from "react-jss";
import searchImage from "../../assets/search-icon.svg";

const styles = createUseStyles({
  searchField: {
    width: "40%",
    maxWidth: 800,
    minWidth: 280,
    height: 30,

    display: "flex",
    justifyContent: "center",
    transition: ".7s",
    opacity: "50%",
    margin: "30px 0",
  },
  "searchField-onFocus": {
    opacity: "100%",
  },
  searchField__input: {
    flex: 1,

    border: "none",
    background: "none",
    borderBottom: "3px solid gray",
    // borderRadius: 5,

    padding: "10px 15px",
    outline: "none",

    fontSize: 18,
    textTransform: "capitalize",
  },
  searchField__btn: {
    width: 30,
    height: 30,

    background: "linear-gradient(135deg,#00C4FF,#9D1BB2)",

    padding: 5,
    border: "none",
    borderRadius: 10,
    outline: "none",

    marginLeft: 10,

    backgroundImage: `url(${searchImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default styles;
