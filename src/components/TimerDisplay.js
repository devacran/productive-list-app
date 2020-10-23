import React from "react";

const TimerDisplay = ({ total, hours, minutes, seconds }) => {
  return (
    <div className="timer-display">
      <div>REMAIND TIME </div>
      <div>hours: {hours} </div>
      <div>minutes: {minutes} </div>
      <div>seconds: {seconds} </div>
    </div>
  );
};
export default TimerDisplay;
