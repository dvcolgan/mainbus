"use client";

import { DateTime, Interval, Duration } from "luxon";
import { useState, useEffect } from "react";

const padZeros = (value) => {
  const str = value.toFixed(0);
  if (str.length === 1) {
    return "0" + str;
  } else {
    return str;
  }
};

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(DateTime.now());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(DateTime.now());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const startTime = DateTime.fromISO("2023-09-03T20:56:23.379Z");
  const duration = Duration.fromObject({ minutes: 30 });

  const endTime = startTime.plus(duration);
  const remaining = endTime.diff(currentTime, ["hours", "minutes", "seconds"]);

  return (
    <div className="text-4xl text-center mb-4 font-bold text-white bg-slate-900 p-3">
      {padZeros(remaining.hours)}:{padZeros(remaining.minutes)}:
      {padZeros(remaining.seconds)}
    </div>
  );
}
