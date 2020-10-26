import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setNewTaskToList as _setNewTaskToList } from "../actions";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { setListSortType as _setListSortType } from "../actions";
import { setListFilters as _setListFilters } from "../actions";
import { removeTaskFromList as _removeTaskFromList } from "../actions";
import { sortList } from "../utils/sortList";
import { filterList } from "../utils/filterList";
import ListItemHeader from "../components/ListItemHeader";
import Item from "./Item";
import NewItem from "../components/NewItem";

const List = props => {
  const [newTask, setNewTask] = useState(false); //To expand o close the newTask form
  const [editTask, setEditTask] = useState(false); //To expand o close the task form
  const [customList, setCustomList] = useState([]); //To expand o close the newTask form
  const {
    setNewTaskToList,
    listName,
    setCurrentTask,
    removeTaskFromList,
    currentTask,
    list,
    listSortType,
    setListSortType,
    setListFilters,
    listFilters
  } = props;

  //To generate the list depending the app state "sort and filters"
  const generateCurrentList = (list, sortType, filters) => {
    let _list = [...list];
    _list = filterList.byOptions(list, filters);
    _list = sortList.by(_list, { type: sortType });
    return _list;
  };

  useEffect(() => {
    // console.log(generateCurrentList(list, listSortType, listFilters));
    const generatedList = generateCurrentList(list, listSortType, listFilters);
    setCustomList(generatedList);
    // setSortedList(sortList.by(list, { type: listSortType }));
  }, [listSortType, list, listFilters]);

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
  const handleCancelEditTask = () => {
    setEditTask(null);
  };
  const handleEditTask = id => {
    editTask ? setEditTask(null) : setEditTask(id);
  };
  const handleSaveNewTask = taskData => {
    //try catch to PUT in API, then it must return res
    const res = {
      id: Math.random(),
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
  const handleListFilters = filters => {
    setListFilters(filters);
  };

  return (
    <div>
      <ListItemHeader
        handleListSortType={handleListSortType}
        handleListFilters={handleListFilters}
        data={currentTask}
        sortType={listSortType}
        listName={listName}
      ></ListItemHeader>
      <div className="list__items">
        {customList.map(data => (
          <Item
            expand={editTask === data.id}
            handleEditTask={handleEditTask}
            handleCancel={handleCancelEditTask}
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
  listName: state.list.data.name,
  listSortType: state.list.sort,
  listFilters: state.list.filters
});
const mapDispatchToProps = {
  setNewTaskToList: _setNewTaskToList,
  setCurrentTask: _setCurrentTask,
  removeTaskFromList: _removeTaskFromList,
  setListSortType: _setListSortType,
  setListFilters: _setListFilters
};
export default connect(mapStateToProps, mapDispatchToProps)(List);

//To generate the list depending the app state (list and sort)
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

// function generateCurrentList(list, sortType, filters){
//   let _list = []
//   _list = filterList.byOptions(list, filters)
//   _list = sortList.by(_list, { type: listSortType })
//   return _list
// }
