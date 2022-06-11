import React from "react";
import { Link } from "react-router-dom";
import styles from "./backTomaain.style";

function BackToMain() {
  const classes = styles();

  return (
    <Link to="/" className={classes.link}>
      Назад на главную
    </Link>
  );
}

export default BackToMain;
