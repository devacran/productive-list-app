import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { updateCurrentTaskData as _updateCurrentTaskData } from "../actions";
import { updateTaskDataFromList as _updateTaskDataFromList } from "../actions";
import { setTaskTimer } from "../actions";
import { parseTimer } from "../utils/timer";
import { Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { TextField } from "@material-ui/core";
import ItemTimeSelector from "../components/ItemTimeSelector";
import ItemDescription from "../components/ItemDescription";
import TimerDisplay from "../components/TimerDisplay";
import ItemTimeDisplay from "../components/ItemTimeDisplay";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
const Item = props => {
  const {
    timer,
    setCurrentTask,
    setTaskTimerData,
    handleDeleteTask,
    handleEditTask,
    updateCurrentTaskData,
    updateTaskDataFromList,
    handleCancel,
    expand,
    active,
    data
  } = props;

  const [inputValues, setInputValues] = useState({});

  const handleSelectItem = () => {
    const { timerStatus } = timer;
    if (timerStatus === "idle" || timerStatus === "stop") {
      setCurrentTask({ ...props.data });
      setTaskTimerData({
        duration: props.data.duration,
        remaindTime: props.data.duration,
        timerStatus: "idle"
      });
    }
  };
  const handleClick = evn => {
    switch (evn.currentTarget.name) {
      case "edit":
        setInputValues(data); //before item expand fills the fields with item data
        handleEditTask(data.id); //expand item, works as toggle
        break;
      case "check":
        updateTaskDataFromList({
          id: data.id,
          completed: data.completed ? false : true, //works as toggle
          completitionTime: data.completed ? 0 : 1, ////works as toggle
          endDate: new Date().toString()
        });
        break;
      case "delete":
        handleDeleteTask(data.id);
        break;
      case "cancel":
        handleCancel();
        break;
    }
  };

  const handleSubmit = evn => {
    evn.preventDefault();
    //try UPDATE to API then updates the app state
    //axios('apiurl', {data: inputValues})
    updateCurrentTaskData(inputValues); //if item is currentTask updates
    updateTaskDataFromList(inputValues); //update item from the list
    handleEditTask(null); //shrink the item
  };
  const handleChange = evn => {
    const fieldName = evn.target.name;
    const fieldValue = evn.target.value;
    setInputValues({ ...inputValues, [fieldName]: fieldValue });
  };
  const handleTaskDuration = ({ duration }) => {
    setInputValues({ ...inputValues, duration });
  };
  const handleDescription = description => {
    setInputValues({ ...inputValues, description });
  };
  return (
    <div className={active ? "item item--active" : "item"}>
      <div className="item__main">
        {!expand && (
          <div>
            <button
              onClick={handleClick}
              name="check"
              className={
                data.completed
                  ? "check-button check-button--checked"
                  : "check-button"
              }
              color="secondary"
              aria-label="edit"
            >
              <CheckIcon />
            </button>
          </div>
        )}
        <div className="item__label">
          {!expand && (
            <div
              className={
                data.completed ? "item__name item__name--cross" : "item__name"
              }
              onClick={handleSelectItem}
            >
              {props.data.name}
            </div>
          )}
          {expand && (
            <form>
              <input
                value={inputValues.name}
                name="name"
                onChange={handleChange}
              ></input>
            </form>
          )}

          {!expand && !data.completed && (
            <div className="item__duration ">
              <WatchLaterIcon />
              <ItemTimeDisplay time={data.duration} />
            </div>
          )}

          {!expand && data.completed && (
            <div className="item__duration item__duration--completed">
              <WatchLaterIcon />
              <ItemTimeDisplay time={data.completitionTime} />
            </div>
          )}
        </div>
        {!expand && (
          <div>
            <button
              onClick={handleClick}
              className={"options-button"}
              name="edit"
              color="secondary"
              aria-label="edit"
            >
              <MoreVertIcon />
            </button>
          </div>
        )}
      </div>
      {expand && (
        <div className="item__options">
          <ItemTimeSelector
            handleClick={handleTaskDuration}
            duration={inputValues.duration}
          />
          <ItemDescription
            description={inputValues.description}
            setDescription={handleDescription}
          />
          <div className="item__actions">
            <form onSubmit={handleSubmit}>
              <Button onClick={handleClick} color="secondary" name="delete">
                Borrar
              </Button>
              <Button onClick={handleClick} name="cancel">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = {
  setCurrentTask: _setCurrentTask,
  setTaskTimerData: setTaskTimer,
  updateCurrentTaskData: _updateCurrentTaskData,
  updateTaskDataFromList: _updateTaskDataFromList
};
const mapStateToProps = state => ({
  timer: state.timer
});
export default connect(mapStateToProps, mapDispatchToProps)(Item);
