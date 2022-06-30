import React from "react";
import styles from "./time.style";

import TimeField from "../../components/timeField/timeField";
import Header from "../../components/header/header";

function Time() {
  const classes = styles();

  return (
    <div>
      <Header />
      <main className={classes.main}>
        <TimeField />
      </main>
    </div>
  );
}

export default Time;
