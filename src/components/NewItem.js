import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ItemOptions from "./ItemOptions";
import ItemTimeSelector from "../components/ItemTimeSelector";
import ItemDescription from "../components/ItemDescription";
const NewItem = props => {
  const [inputValues, setInputValues] = useState({
    name: "Mi Lista Nueva ",
    duration: "5000",
    description: ""
  });
  const {
    handleCreateNewTask,
    handleCancelNewTask,
    handleSaveNewTask,
    expand
  } = props;
  const handleTaskDuration = ({ duration }) => {
    setInputValues({ ...inputValues, duration });
  };
  const handleSubmit = evn => {
    evn.preventDefault();
    handleSaveNewTask(inputValues);
  };
  const handleChange = evn => {
    const fieldName = evn.target.name;
    const fieldValue = evn.target.value;
    setInputValues({ ...inputValues, [fieldName]: fieldValue });
  };
  const handleClick = evn => {
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
  const handleDescription = description => {
    setInputValues({ ...inputValues, description });
  };
  return (
    <div className="new-item">
      <div className="new-item__main">
        {!expand && (
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
        {expand && (
          <div className="new-item__name">
            <input
              onChange={handleChange}
              name="name"
              value={inputValues.name}
            ></input>
          </div>
        )}
      </div>
      {expand && (
        <form>
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
          <Button onClick={handleSubmit} color="primary" type="submit">
            Save
          </Button>
        </form>
      )}
    </div>
  );
};
export default NewItem;
