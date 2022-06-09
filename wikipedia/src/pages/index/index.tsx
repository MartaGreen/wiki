import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.style";

function Index() {
  const classes = styles();
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Добро пожаловать!</h1>
      <div className={classes.navigation}>
        <Link to="/time" className={classes.link}>
          Watch time
        </Link>
        <Link to="/searchForCity" className={classes.link}>
          Search for a city
        </Link>
      </div>
    </main>
  );
}

export default Index;
