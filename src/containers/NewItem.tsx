import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { setTaskTimer as _setTaskTimerData } from "../actions";
import { setNewTaskToList as _setNewTaskToList } from "../actions";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ItemTimeSelector from "../components/ItemTimeSelector";
import ItemDescription from "../components/ItemDescription";
import { CreateTaskMutation } from "./CreateTaskMutation";
import { TimerType, TaskType, TimerStatusTypes } from "../types";

type NewItemProps = {
  setCurrentTask: (task: TaskType) => void;
  setTaskTimerData: (timer: TimerType) => void;
  setNewTaskToList: (task: TaskType) => void;
  timer: TimerType;
  currentList: TaskType[];
};
const NewItem: FC<NewItemProps> = (props: NewItemProps) => {
  const [newTask, setNewTask] = useState(false); //To expand o close the newTask form
  const {
    setCurrentTask,
    setTaskTimerData,
    setNewTaskToList,
    timer,
    currentList
  } = props;
  const [inputValues, setInputValues] = useState({
    name: "Mi Lista Nueva ",
    duration: 1800,
    description: ""
  });
  const handleCreateNewTask = () => {
    setNewTask(true);
  };
  const handleCancelNewTask = () => {
    setNewTask(false);
  };
  const updateTimerData = (taskData: TaskType) => {
    if (timer.timerStatus !== "inProgress") {
      setCurrentTask(taskData); //Sets current Task and timer only if timer is not in progress
      setTaskTimerData({
        duration: taskData.duration,
        remaindTime: taskData.duration,
        timerStatus: TimerStatusTypes.IDLE
      });
    }
  };

  const handleTaskDuration = ({ duration }) => {
    setInputValues({ ...inputValues, duration });
  };

  const handleChange = (evn: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = evn.target.name;
    const fieldValue = evn.target.value;
    setInputValues({ ...inputValues, [fieldName]: fieldValue });
  };
  const handleClick = (evn: React.MouseEvent<HTMLButtonElement>) => {
    switch (evn.currentTarget.value) {
      case "cancel":
        handleCancelNewTask();
        break;
      case "new":
        handleCreateNewTask();
        break;
    }
  };
  const handleCancel = () => {
    handleCancelNewTask();
  };
  const handleDescription = (description: string) => {
    setInputValues({ ...inputValues, description });
  };
  return (
    <div className="new-item">
      <div className="new-item__main">
        {!newTask && (
          <div>
            <button
              className="check-button check-button--checked"
              onClick={handleClick}
              value="new"
            >
              <AddIcon />
            </button>
            <span>Crear Tarea</span>
          </div>
        )}
        {newTask && (
          <div className="new-item__name">
            <input
              onChange={handleChange}
              name="name"
              value={inputValues.name}
            ></input>
          </div>
        )}
      </div>
      {newTask && (
        <CreateTaskMutation>
          {([create, { data }]) => {
            useEffect(() => {
              if (data) {
                setNewTaskToList(data.createTask);
                updateTimerData(data.createTask);
                setNewTask(false);
              }
            }, [data]);
            return (
              <form
                onSubmit={evn => {
                  evn.preventDefault();
                  create({
                    variables: {
                      input: inputValues,
                      listID: currentList
                    }
                  });
                }}
              >
                <div className="new-item__options">
                  <ItemTimeSelector
                    handleClick={handleTaskDuration}
                    duration={inputValues.duration}
                  />
                  <ItemDescription
                    description={inputValues.description}
                    setDescription={handleDescription}
                  />
                </div>
                <Button onClick={handleCancel} value="cancel">
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Save
                </Button>
              </form>
            );
          }}
        </CreateTaskMutation>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  timer: state.timer,
  currentList: state.list._id
});
const mapDispatchToProps = {
  setCurrentTask: _setCurrentTask,
  setNewTaskToList: _setNewTaskToList,
  setTaskTimerData: _setTaskTimerData
};
export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
