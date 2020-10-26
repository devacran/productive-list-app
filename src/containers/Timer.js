import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setTimerStatus as _setTimerStatus } from "../actions";
import { setTimerRemind as _setTimerRemind } from "../actions";
import { updateCurrentTaskData as _updateCurrentTaskData } from "../actions";
import { updateTaskDataFromList as _updateTaskDataFromList } from "../actions";
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
    updateTaskDataFromList,
    updateCurrentTaskData
  } = props;
  const { timerStatus } = timer;
  const remaindTime = parseTimer(timer.remaindTime);
  useEffect(() => {
    countDown.config(
      {
        seconds: timer.remaindTime,
        setRemindTimeState: setTimerRemind,
        setTimerState: setTimerStatus,
        timerState: timer.timerStatus
      },
      []
    );
    switch (timerStatus) {
      case "inProgress":
        countDown.start();
        updateTaskDataFromList({
          startDate: new Date().toString(),
          completed: false
        }); //Sets the current date and completed false to reset if had been started
        updateCurrentTaskData({
          startDate: new Date().toString(),
          completed: false
        });
        break;
      case "stop":
        countDown.stop();
        setTimerRemind(0);
        updateTaskDataFromList({
          id: currentTask.id,
          completed: true,
          completitionTime: 500
        }); //Updates the task from list
        updateCurrentTaskData({
          completed: true,
          completitionTime: 500
        }); //Updates the task from currentTask
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
  updateTaskDataFromList: _updateTaskDataFromList,
  updateCurrentTaskData: _updateCurrentTaskData
};
const mapStateToProps = state => ({
  currentTask: state.currentTask.data || {},
  timer: state.timer
});
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
