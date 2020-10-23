import React from "react";

const TimerButton = ({ timerStatus, setTimerStatus }) => {
  const handleTimerButton = evn => {
    switch (evn.target.value) {
      case "start":
        setTimerStatus("inProgress");
        break;
      case "pause":
        setTimerStatus("pause");
        break;
      case "continue":
        setTimerStatus("inProgress");
        break;
      case "stop":
        setTimerStatus("stop");
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
