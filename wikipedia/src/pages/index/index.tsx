import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.style";

function Index() {
  const classes = styles();
  return (
    <main className={classes.main} style={{ minHeight: "100vh" }}>
      <h1 className={classes.title}>Добро пожаловать!</h1>
      <div className={classes.navigation}>
        <Link to="/time" className={classes.link}>
          Время
        </Link>
        <Link to="/searchForCity" className={classes.link}>
          Город
        </Link>
      </div>
    </main>
  );
}

export default Index;
