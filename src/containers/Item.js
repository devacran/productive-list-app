import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { updateCurrentTaskData as _updateCurrentTaskData } from "../actions";
import { updateTaskDataFromList as _updateTaskDataFromList } from "../actions";
import { setTaskTimer } from "../actions";
import { Button, IconButton, AlarmIcon } from "@material-ui/core";
const Item = props => {
  const {
    timer,
    setCurrentTask,
    setTaskTimerData,
    handleDeleteTask,
    handleEditTask,
    updateCurrentTaskData,
    updateTaskDataFromList,
    expand,
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
        handleEditTask(data.id); //expand item
        break;
      case "delete":
        handleDeleteTask(data.id);
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
  return (
    <div className="item">
      <div onClick={handleSelectItem}>Item Works {props.data.name}</div>
      {data.completed && <div>COMPLETADA</div>}
      <button
        onClick={handleClick}
        name="edit"
        color="secondary"
        aria-label="edit"
      >
        editar
      </button>
      {expand && (
        <form onSubmit={handleSubmit}>
          <input
            value={inputValues.duration}
            onChange={handleChange}
            name="duration"
            placeholder="duracion"
          ></input>
          <Button onClick={handleClick} color="secondary" name="delete">
            Borrar
          </Button>
          <Button>Cancel</Button>
          <Button color="primary" type="submit">
            Save
          </Button>
        </form>
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
