import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setTimerStatus as _setTimerStatus } from "../actions";
import { setTimerRemind as _setTimerRemind } from "../actions";
import { setCurrentTaskCompleted as _setCurrentTaskCompleted } from "../actions";
import { timer as countDown } from "../utils/timer";
import { parseTimer } from "../utils/timer";
import TimerDisplay from "../components/TimerDisplay";
import TimerButton from "../components/TimerButton";
const Timer = props => {
  const {
    timer,
    currentTask,
    setTimerStatus,
    setTimerRemind,
    setCurrentTaskCompleted
  } = props;
  const { timerStatus } = timer;
  const remaindTime = parseTimer(timer.remaindTime);
  useEffect(() => {
    countDown.config({
      seconds: timer.remaindTime,
      remindTimeState: setTimerRemind,
      statusState: setTimerStatus
    });
    switch (timerStatus) {
      case "inProgress":
        countDown.start();
        break;
      case "stop":
        countDown.stop();
        setCurrentTaskCompleted(timer.remaindTime);
        break;
      case "pause":
        countDown.stop();
        break;
    }
  }, [timerStatus]);

  return (
    <div className="timer">
      <div className="timer__container">
        <TimerDisplay {...remaindTime} />
        <TimerButton
          timerStatus={timerStatus}
          setTimerStatus={setTimerStatus}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setTimerStatus: _setTimerStatus,
  setTimerRemind: _setTimerRemind,
  setCurrentTaskCompleted: _setCurrentTaskCompleted
};
const mapStateToProps = state => ({
  currentTask: state.currentTask.data || {},
  timer: state.timer
});
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
