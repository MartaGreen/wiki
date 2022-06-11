import React from "react";
import { Link } from "react-router-dom";
import styles from "./time.style";

import TimeField from "../../components/time/timeField";

function Time() {
  const classes = styles();

  return (
    <main className={classes.main}>
      <TimeField />
      <Link to="/">Назад на главную</Link>
    </main>
  );
}

export default Time;
