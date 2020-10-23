import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setTaskTimer as _setTaskTimerData } from "../actions";
import { setTimerStatus as _setTimerStatus } from "../actions";
import { timer as countDown } from "../utils/timer";
import TimerDisplay from "../components/TimerDisplay";
import TimerButton from "../components/TimerButton";
const Timer = props => {
  const { timer, currentTask, setTaskTimerData, setTimerStatus } = props;
  const { timerStatus, remaindTime } = timer;

  useEffect(() => {
    setTaskTimerData({
      duration: currentTask.duration,
      remaindTime: currentTask.duration,
      timerStatus: "stop"
    });
  }, []);
  useEffect(() => {
    countDown.config({
      seconds: 5000,
      state: null
    });
    switch (timerStatus) {
      case "inProgress":
        countDown.start();
        break;
      case "stop":
        countDown.stop();
        break;
      case "pause":
        countDown.stop();
        break;
    }
  }, [timerStatus]);

  return (
    <div className="timer">
      <div className="timer__container">
        <TimerDisplay data={remaindTime} />
        <TimerButton
          timerStatus={timerStatus}
          setTimerStatus={setTimerStatus}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setTaskTimerData: _setTaskTimerData,
  setTimerStatus: _setTimerStatus
};
const mapStateToProps = state => ({
  currentTask: state.currentTask.data || {},
  timer: state.timer
});
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
