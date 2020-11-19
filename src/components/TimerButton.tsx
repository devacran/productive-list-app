import * as React from "react";
import { TimerStatusTypes } from "../types";
type props = {
  timerStatus: TimerStatusTypes;
  setTimerStatus: (status: TimerStatusTypes) => void;
};
const TimerButton = ({ timerStatus, setTimerStatus }: props) => {
  const handleTimerButton = evn => {
    switch (evn.target.value) {
      case "start":
        setTimerStatus(TimerStatusTypes.inProgress);
        break;
      case "pause":
        setTimerStatus(TimerStatusTypes.pause);
        break;
      case "continue":
        setTimerStatus(TimerStatusTypes.continue);
        break;
      case "stop":
        setTimerStatus(TimerStatusTypes.stop);
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
