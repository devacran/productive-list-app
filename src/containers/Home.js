import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { sortListByStartDate } from "../utils/sortList";
import Timer from "./Timer";
import List from "./List";
const Home = props => {
  const { list, setCurrentTask } = props;
  let taskList = [];
  let taskTimer = {};
  useEffect(() => {
    //The first step to do is load the list info
    //Then set the current task in the state (the lastest by default)
    taskList = sortListByStartDate(list);
    const currentTask = taskList.shift();
    setCurrentTask(currentTask);
  }, [sortListByStartDate, setCurrentTask]);
  return (
    <div className="home">
      <Timer></Timer>
      <List data={taskList}></List>
    </div>
  );
};
const mapDispatchToProps = {
  setCurrentTask: _setCurrentTask
};
const mapStateToProps = state => ({
  list: state.list.data || []
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
