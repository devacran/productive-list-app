import React, { FC } from "react";
import { parseTimer } from "../utils/timer";

type ItemTimeDisplayProps = {
  time: object;
};

const ItemTimeDisplay: FC<ItemTimeDisplayProps> = (
  props: ItemTimeDisplayProps
) => {
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
