import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { setTaskTimer as _setTaskTimerData } from "../actions";

import Timer from "./Timer";
import List from "./List";
import WithListData from "./WithListData";

import { sortList } from "../utils/sortList";

const Home = props => {
  const { list, setCurrentTask, setTaskTimerData } = props;
  let taskTimer = {};

  useEffect(() => {
    //The first step to do is load the list info
    //Then set the current task in the state (the lastest by default)
    //And set the task timer
    let taskList = list;
    taskList = sortList.by(taskList, { type: "date" });
    const currentTask = taskList.shift();
    setCurrentTask(currentTask);
    setTaskTimerData({
      duration: currentTask.duration,
      remaindTime: currentTask.duration,
      timerStatus: "idle"
    });
  }, [setCurrentTask]);

  return (
    <div className="home">
      <Timer></Timer>
      <WithListData>
        {({ data, loading, error }) => <List list={data} />}
      </WithListData>
    </div>
  );
};
const mapDispatchToProps = {
  setTaskTimerData: _setTaskTimerData,
  setCurrentTask: _setCurrentTask
};
const mapStateToProps = state => ({
  list: state.list.data.tasks || []
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
