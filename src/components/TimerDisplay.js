import React from "react";
import { connect } from "react-redux";
const TimerDisplay = props => {
  const { total, hours, minutes, seconds, style } = props;
  return (
    <div className={style}>
      <span>
        {hours < 10 ? "0" : ""}
        {hours}
      </span>
      <span>
        :{minutes < 10 ? "0" : ""}
        {minutes}
      </span>
      <span>
        :{seconds < 10 ? "0" : ""}
        {seconds}
      </span>
    </div>
  );
};
export default TimerDisplay;
