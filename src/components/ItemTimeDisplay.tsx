import * as React from "react";
import { parseTimer } from "../utils/timer";

type props = {
  time: object;
};
const ItemTimeDisplay = (props: props) => {
  const { hours, minutes, seconds } = parseTimer(props.time);
  return (
    <div>
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
export default ItemTimeDisplay;
