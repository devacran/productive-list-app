import React from "react";
import { connect } from "react-redux";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { setTaskTimer } from "../actions";
import { Button, IconButton, AlarmIcon } from "@material-ui/core";
const Item = props => {
  const {
    setCurrentTask,
    setTaskTimerData,
    handleDeleteTask,
    handleEditTask,
    expand,
    data
  } = props;
  const handleSelectItem = () => {
    setCurrentTask({ ...props.data });
    setTaskTimerData({
      duration: props.data.duration,
      remaindTime: props.data.duration,
      timerStatus: "idle"
    });
  };
  const handleClick = evn => {
    switch (evn.target.name) {
      case "edit":
        handleEditTask();
        break;
      case "delete":
        handleDeleteTask(data.id);
        break;
    }
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
        <div>
          <Button onClick={handleClick} color="secondary" name="delete">
            Borrar
          </Button>
          <Button>Cancel</Button>
          <Button color="primary">Save</Button>
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = {
  setCurrentTask: _setCurrentTask,
  setTaskTimerData: setTaskTimer
};
export default connect(null, mapDispatchToProps)(Item);
