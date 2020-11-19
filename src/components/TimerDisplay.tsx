import * as React from "react";

type props = {
  total: number;
  hours: number;
  minutes: number;
  seconds: number;
  style: "string";
};
const TimerDisplay = (props: props) => {
  const { hours, minutes, seconds, style } = props;
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
