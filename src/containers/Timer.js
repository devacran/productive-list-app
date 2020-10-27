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
  const parsedRemaindTime = parseTimer(timer.remaindTime);
  const calcCompletitionTime = (startDate, endDate) => {
    const sd = Date.parse(startDate);
    const ed = Date.parse(endDate);
    const t = ed - sd;
    return new Date(t).getSeconds();
  };

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
        if (timer.remaindTime === currentTask.duration) {
          updateTaskDataFromList({
            startDate: new Date().toString(),
            completed: false
          }); //Sets the current date and completed false to reset if had been started
          updateCurrentTaskData({
            startDate: new Date().toString(),
            completed: false
          });
        }
        break;
      case "stop":
        const endDate = new Date().toString();
        const completitionTime = calcCompletitionTime(
          currentTask.startDate,
          endDate
        );
        countDown.stop();
        setTimerRemind(0);
        updateTaskDataFromList({
          id: currentTask.id,
          completed: true,
          endDate,
          completitionTime
        }); //Updates the task from list
        updateCurrentTaskData({
          completed: true,
          endDate,
          completitionTime
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
        <TimerDisplay {...parsedRemaindTime} style={"timer-display"} />
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
