import React from "react";
import { connect } from "react-redux";
import { parseTimer } from "../utils/timer";
const TimerDisplay = props => {
  const { total, hours, minutes, seconds } = props;

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
