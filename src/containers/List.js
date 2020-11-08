import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { setListSortType as _setListSortType } from "../actions";
import { setListFilters as _setListFilters } from "../actions";
import { setTaskTimer as _setTaskTimerData } from "../actions";
import { removeTaskFromList as _removeTaskFromList } from "../actions";
import { sortList } from "../utils/sortList";
import { filterList } from "../utils/filterList";
import ListItemHeader from "../components/ListItemHeader";
import Item from "./Item";
import NewItem from "./NewItem";

const List = props => {
  const {
    setTaskTimerData,
    listName,
    setCurrentTask,
    removeTaskFromList,
    currentTask,
    list,
    listSortType,
    setListSortType,
    setListFilters,
    listFilters,
    timer
  } = props;
  const [editTask, setEditTask] = useState(false); //To expand o close the task form
  const [customList, setCustomList] = useState([]); //List filtered and sorted by the user

  //the final list showed to the user
  const [showedItemsQty, setShowedItemsQty] = useState(5); //Qty of showed items
  const [showedList, setShowedList] = useState([]); //Qty of showed items

  //To generate the list depending the app state "sort and filters"
  const generateCurrentList = (list, sortType, filters) => {
    let _list = [...list];
    _list = filterList.byOptions(list, filters);
    _list = sortList.by(_list, { type: sortType });
    return _list;
  };

  useEffect(() => {
    if (list.length > 0) {
      const currentTask = list[list.length - 1]; //to get the lastest item by default
      setCurrentTask(currentTask);
      setTaskTimerData({
        duration: currentTask.duration,
        remaindTime: currentTask.duration,
        timerStatus: "idle"
      });
    }
  }, [list]);
  useEffect(() => {
    setShowedList(customList.slice(0, showedItemsQty)); //Sets showed list with increments of 5
  }, [showedItemsQty, customList]);

  useEffect(() => {
    const generatedList = generateCurrentList(list, listSortType, listFilters);
    setCustomList(generatedList);
  }, [listSortType, list, listFilters]);

  const handleDeleteTask = _id => {
    //try catch to PUT in API, then it must return success or error
    removeTaskFromList(_id);
    if (currentTask._id === _id) {
      setCurrentTask(list.shift());
    }
  };

  const handleCancelEditTask = () => {
    setEditTask(null);
  };
  const handleEditTask = _id => {
    editTask ? setEditTask(null) : setEditTask(_id);
  };

  const handleListSortType = type => {
    setListSortType(type);
  };
  const handleListFilters = filters => {
    setListFilters(filters);
  };
  const handleShowMore = () => {
    setShowedItemsQty(showedItemsQty + 5);
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
        {showedList.map(data => (
          <Item
            expand={editTask === data._id}
            active={currentTask._id === data._id}
            handleEditTask={handleEditTask}
            handleCancel={handleCancelEditTask}
            key={data._id}
            handleDeleteTask={handleDeleteTask}
            data={data}
          />
        ))}
      </div>
      {customList.length > showedList.length && (
        <div className="list__show-more">
          <button className={"show-more-button"} onClick={handleShowMore}>
            + Mostrar mas
          </button>
        </div>
      )}
      <NewItem />
    </div>
  );
};
const mapStateToProps = state => ({
  currentTask: state.currentTask.data,
  // list: state.list.data.tasks || [],
  listName: state.list.data.name,
  listSortType: state.list.sort,
  listFilters: state.list.filters,
  timer: state.timer
});
const mapDispatchToProps = {
  setCurrentTask: _setCurrentTask,
  removeTaskFromList: _removeTaskFromList,
  setListSortType: _setListSortType,
  setListFilters: _setListFilters,
  setTaskTimerData: _setTaskTimerData
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
