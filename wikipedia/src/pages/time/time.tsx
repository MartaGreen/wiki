import React from "react";
import styles from "./time.style";

import TimeField from "../../components/timeField/timeField";
import BackToMain from "../../components/backToMain/backToMain";

function Time() {
  const classes = styles();

  return (
    <main className={classes.main}>
      <TimeField />
      <BackToMain />
    </main>
  );
}

export default Time;
