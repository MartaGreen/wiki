import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.style";

function Index() {
  const classes = styles();
  return (
    <main className={classes.main} style={{ minHeight: "100vh" }}>
      <h1 className={classes.title}>Добро пожаловать!</h1>
      <div className={classes.navigation}>
        <Link to="/time" className={`${classes.link} ${classes.link_time}`}>
          Время
        </Link>
        <Link to="/city" className={`${classes.link} ${classes.link_city}`}>
          Город
        </Link>
      </div>
    </main>
  );
}

export default Index;
