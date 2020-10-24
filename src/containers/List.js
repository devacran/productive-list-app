import React, { useState } from "react";
import { connect } from "react-redux";
import { setNewTaskToList as _setNewTaskToList } from "../actions";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { removeTaskFromList as _removeTaskFromList } from "../actions";
import { sortListByStartDate } from "../utils/sortList";
import ListItemHeader from "../components/ListItemHeader";
import Item from "./Item";
import NewItem from "../components/NewItem";

const List = props => {
  const [newTask, setNewTask] = useState(false); //To expand o close the newTask form
  const [editTask, setEditTask] = useState(false); //To expand o close the newTask form
  const {
    setNewTaskToList,
    setCurrentTask,
    removeTaskFromList,
    currentTask
  } = props;
  const list = props.data || [];
  const sortedList = sortListByStartDate(list);
  const handleCreateNewTask = () => {
    setNewTask(true);
  };
  const handleDeleteTask = id => {
    //try catch to PUT in API, then it must return success or error
    console.log("deleteTask", id);
    removeTaskFromList(id);
    if (currentTask.id === id) {
      setCurrentTask(list.shift());
    }
  };
  const handleCancelNewTask = () => {
    setNewTask(false);
  };
  const handleEditTask = id => {
    editTask ? setEditTask(null) : setEditTask(id);
  };
  const handleSaveNewTask = taskData => {
    //try catch to PUT in API, then it must return res
    const res = {
      id: "1239",
      name: taskData.name,
      duration: taskData.duration,
      description: taskData.description,
      completed: false,
      completitionTime: null,
      startDate: null,
      endDate: null,
      creationDate: new Date().toString()
    };
    setNewTask(false);
    setNewTaskToList(res);
    setCurrentTask(res);
  };
  return (
    <div className="list">
      <ListItemHeader></ListItemHeader>
      {sortedList.map(data => (
        <Item
          expand={editTask === data.id}
          handleEditTask={handleEditTask}
          key={data.id}
          handleDeleteTask={handleDeleteTask}
          data={data}
        />
      ))}
      <NewItem
        expand={newTask}
        handleCreateNewTask={handleCreateNewTask}
        handleCancelNewTask={handleCancelNewTask}
        handleSaveNewTask={handleSaveNewTask}
      ></NewItem>
    </div>
  );
};
const mapStateToProps = state => ({
  currentTask: state.currentTask.data
});
const mapDispatchToProps = {
  setNewTaskToList: _setNewTaskToList,
  setCurrentTask: _setCurrentTask,
  removeTaskFromList: _removeTaskFromList
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
