import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.style";

function Header() {
  const classes = styles();

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.link}>
        <div className={classes.link__icon}></div>
        <span>На главную</span>
      </Link>
    </header>
  );
}

export default Header;
