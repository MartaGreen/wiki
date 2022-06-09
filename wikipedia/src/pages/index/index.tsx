import React from "react";
import styles from "./index.style";

function Index() {
  const classes = styles();
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Добро пожаловать!</h1>
    </main>
  );
}

export default Index;
