import React, { useEffect, useState } from "react";
import styles from "./timeFied.style";

function TimeField() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const classes = styles();

  function timeFormatter(timeValue: number) {
    const timeValue_str = timeValue.toString();
    const formattedTimeValue: string =
      timeValue_str.length === 1 ? "0" + timeValue_str : timeValue_str;
    return formattedTimeValue;
  }

  function getCurrentTime() {
    const currentTime = new Date();
    const hours = timeFormatter(currentTime.getHours());
    const minutes = timeFormatter(currentTime.getMinutes());
    const seconds = timeFormatter(currentTime.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  const updateCurrentTime = () => {
    const currentTime: string = getCurrentTime();
    setCurrentTime(currentTime);
  };

  useEffect(() => {
    setInterval(() => updateCurrentTime(), 1000);
  }, []);

  return <div className={classes.time}>{currentTime}</div>;
}

export default TimeField;
