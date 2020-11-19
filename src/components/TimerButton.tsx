import React, { FC } from "react";
import { TimerStatusTypes } from "../types";

type TimerButtonProps = {
  timerStatus: TimerStatusTypes;
  setTimerStatus: (status: TimerStatusTypes) => void;
};

const TimerButton: FC<TimerButtonProps> = ({
  timerStatus,
  setTimerStatus
}: TimerButtonProps) => {
  const handleTimerButton = evn => {
    switch (evn.target.value) {
      case "start":
        setTimerStatus(TimerStatusTypes.IN_PROGRESS);
        break;
      case "pause":
        setTimerStatus(TimerStatusTypes.PAUSE);
        break;
      case "continue":
        setTimerStatus(TimerStatusTypes.CONTINUE);
        break;
      case "stop":
        setTimerStatus(TimerStatusTypes.STOP);
        break;
    }
  };

  const initial = (
    <div className="timer-button">
      <button onClick={handleTimerButton} value="start">
        START
      </button>
    </div>
  );

  const inProgress = (
    <div className="timer-button">
      <button onClick={handleTimerButton} value="pause">
        PAUSE
      </button>
    </div>
  );

  const pause = (
    <div className="timer-button">
      <button onClick={handleTimerButton} value="continue">
        CONTINUE
      </button>
      <button onClick={handleTimerButton} value="stop">
        STOP
      </button>
    </div>
  );

  //returns the button depending the timer state value
  return (
    <>
      {timerStatus === "idle" && initial}
      {timerStatus === "stop" && initial}
      {timerStatus === "pause" && pause}
      {timerStatus === "inProgress" && inProgress}
    </>
  );
};
export default TimerButton;
