import React from "react";
import { Link } from "react-router-dom";

import TimeField from "../../components/time/timeField";

function Time() {
  return (
    <main>
      <TimeField />
      <Link to="/" />
    </main>
  );
}

export default Time;
