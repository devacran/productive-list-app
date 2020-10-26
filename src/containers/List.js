import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setNewTaskToList as _setNewTaskToList } from "../actions";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { setListSortType as _setListSortType } from "../actions";
import { removeTaskFromList as _removeTaskFromList } from "../actions";
import { sortList } from "../utils/sortList";
import { filterList } from "../utils/filterList";
import ListItemHeader from "../components/ListItemHeader";
import Item from "./Item";
import NewItem from "../components/NewItem";

const List = props => {
  const [newTask, setNewTask] = useState(false); //To expand o close the newTask form
  const [editTask, setEditTask] = useState(false); //To expand o close the newTask form
  const [sortedList, setSortedList] = useState([]); //To expand o close the newTask form
  const {
    setNewTaskToList,
    setCurrentTask,
    removeTaskFromList,
    currentTask,
    list,
    listSortType,
    setListSortType,
    listFilterType
  } = props;

  useEffect(() => {
    setSortedList(sortList.by(list, { type: listSortType }));
  }, [listSortType, list]);

  const handleCreateNewTask = () => {
    setNewTask(true);
  };
  const handleDeleteTask = id => {
    //try catch to PUT in API, then it must return success or error
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

  const handleListSortType = type => {
    setListSortType(type);
  };

  return (
    <div>
      <ListItemHeader
        handleListSortType={handleListSortType}
        data={currentTask}
      ></ListItemHeader>
      <div className="list__items">
        {sortedList.map(data => (
          <Item
            expand={editTask === data.id}
            handleEditTask={handleEditTask}
            key={data.id}
            handleDeleteTask={handleDeleteTask}
            data={data}
          />
        ))}
      </div>
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
  currentTask: state.currentTask.data,
  list: state.list.data.tasks || [],
  listSortType: state.list.sort,
  listFilterType: state.list.filter
});
const mapDispatchToProps = {
  setNewTaskToList: _setNewTaskToList,
  setCurrentTask: _setCurrentTask,
  removeTaskFromList: _removeTaskFromList,
  setListSortType: _setListSortType
};
export default connect(mapStateToProps, mapDispatchToProps)(List);

// //To generate the list depending the app state (list and sort)
// function generateCurrentList(list, sortType, filters) {
//   let _list = [...list];
//   _list = filterList.byOptions(list, filters);
//   if (sortType === "date") {
//     _list = sortListByStartDate(list);
//   }
//   if (sortType === "name") {
//     _list = sortListByName(list);
//   }
//   return _list;
// }
// console.log(
//   "PRUEBA con name y short",
//   generateCurrentList(list, "name", { duration: "short" })
// );
