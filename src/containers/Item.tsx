import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentTask as _setCurrentTask } from "../actions";
import { updateCurrentTaskData as _updateCurrentTaskData } from "../actions";
import { updateTaskDataFromList as _updateTaskDataFromList } from "../actions";
import { setTaskTimer } from "../actions";
import { Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ItemTimeSelector from "../components/ItemTimeSelector";
import ItemDescription from "../components/ItemDescription";
import ItemTimeDisplay from "../components/ItemTimeDisplay";
import { UpdateTaskMutation } from "./UpdateTaskMutation";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { DeleteTaskMutation } from "./DeleteTaskMutation";
import { TimerType, TaskType, TimerStatusTypes } from "../types";

type ItemProps = {
  timer: TimerType;
  setCurrentTask: (task: TaskType) => void;
  setTaskTimerData: (timer: TimerType) => void;
  handleDeleteTask: (taskID: string) => void;
  handleEditTask: (taskID: string | boolean) => void;
  updateCurrentTaskData: (taskData: {} & TaskType) => void;
  updateTaskDataFromList: (taskData: {} & TaskType) => void;
  handleCancel: () => void;
  expand: boolean;
  active: boolean;
  data: TaskType;
};

const Item: FC<ItemProps> = (props: ItemProps) => {
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

  const [inputValues, setInputValues] = useState<TaskType>({});

  const handleSelectItem = () => {
    const { timerStatus } = timer;
    if (timerStatus === "idle" || timerStatus === "stop") {
      setCurrentTask({ ...props.data });
      setTaskTimerData({
        duration: props.data.duration,
        remaindTime: props.data.duration,
        timerStatus: TimerStatusTypes.IDLE
      });
    }
  };

  const handleClick = (evn: React.MouseEvent<HTMLButtonElement>) => {
    switch (evn.currentTarget.name) {
      case "edit":
        const _inputValues = { ...data };
        delete _inputValues._id;
        delete _inputValues.__typename;
        setInputValues(_inputValues); //before item expand fills the fields with item data
        handleEditTask(data._id); //expand item, works as toggle
        break;
      case "check": //to mark a task as completed
        updateTaskDataFromList({
          _id: data._id,
          completed: data.completed ? false : true, //works as toggle
          completitionTime: data.completed ? null : 0.1, ////works as toggle, if is marked as completed sets 0.1s to avoid bugs
          endDate: new Date().toString()
        });
        break;
      case "delete":
        handleDeleteTask(data._id);
        break;
      case "cancel":
        handleCancel();
        break;
    }
  };

  const handleChange = (evn: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evn.target as HTMLInputElement;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleTaskDuration = ({ duration }) => {
    setInputValues({ ...inputValues, duration });
  };

  const handleDescription = (description: string) => {
    setInputValues({ ...inputValues, description });
  };

  return (
    <div className={active ? "item item--active" : "item"}>
      <div className={!expand ? "item__main" : "item__main item__main--expand"}>
        {!expand && (
          <UpdateTaskMutation>
            {([update, res]) => {
              const response = res.data;
              useEffect(() => {
                if (response) {
                  updateTaskDataFromList({
                    _id: data._id,
                    completed: data.completed ? false : true, //works as toggle
                    completitionTime: data.completed ? null : 0.1, ////works as toggle, if is marked as completed sets 0.1s to avoid bugs
                    endDate: new Date().toString()
                  });
                }
              }, [response]);
              return (
                <div>
                  <button
                    onClick={() => {
                      update({
                        variables: {
                          input: {
                            completed: data.completed ? false : true, //works as toggle
                            completitionTime: data.completed ? null : 0.1, ////works as toggle, if is marked as completed sets 0.1s to avoid bugs
                            endDate: new Date().toString()
                          },
                          taskID: data._id
                        }
                      });
                    }}
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
              );
            }}
          </UpdateTaskMutation>
        )}
        <div className="item__label" onClick={handleSelectItem}>
          {expand && (
            <form>
              <input
                value={inputValues.name}
                name="name"
                onChange={handleChange}
              ></input>
            </form>
          )}

          {!expand && (
            <div
              className={
                data.completed ? "item__name item__name--cross" : "item__name"
              }
            >
              {props.data.name}
            </div>
          )}

          {!expand && !data.completed && (
            <div className="item__duration ">
              <WatchLaterIcon />
              <ItemTimeDisplay time={data.duration} />
            </div>
          )}

          {!expand && data.completed && data.completitionTime > 1 && (
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
          <UpdateTaskMutation>
            {([update, res]) => {
              const response = res.data;
              useEffect(() => {
                if (response) {
                  updateCurrentTaskData(inputValues);
                  updateTaskDataFromList({ ...inputValues, _id: data._id }); //update item from the list
                  handleEditTask(null); //shrink the item form
                }
              }, [response]);
              return (
                <form
                  onSubmit={evn => {
                    evn.preventDefault();
                    update({
                      variables: {
                        input: inputValues,
                        taskID: data._id
                      }
                    });
                  }}
                >
                  <ItemTimeSelector
                    handleClick={handleTaskDuration}
                    duration={inputValues.duration}
                  />
                  <ItemDescription
                    description={inputValues.description}
                    setDescription={handleDescription}
                  />
                  <div className="item__actions">
                    <DeleteTaskMutation>
                      {([deleteTask, res]) => {
                        const response = res.data;
                        useEffect(() => {
                          if (response) {
                            handleDeleteTask(data._id);
                          }
                        }, [response]);
                        return (
                          <Button
                            onClick={() =>
                              deleteTask({ variables: { taskID: data._id } })
                            }
                            color="secondary"
                            name="delete"
                          >
                            Borrar
                          </Button>
                        );
                      }}
                    </DeleteTaskMutation>
                    <Button onClick={handleClick} name="cancel">
                      Cancel
                    </Button>
                    <Button color="primary" type="submit">
                      Save
                    </Button>
                  </div>
                </form>
              );
            }}
          </UpdateTaskMutation>
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
