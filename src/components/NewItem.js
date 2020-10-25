import React, { useState } from "react";
import { Button } from "@material-ui/core";
const NewItem = props => {
  const [inputValues, setInputValues] = useState({
    name: "Mi Lista ",
    duration: "5000",
    description: ""
  });
  const {
    handleCreateNewTask,
    handleCancelNewTask,
    handleSaveNewTask,
    expand
  } = props;

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
    switch (evn.target.value) {
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
  return (
    <div className="new-item">
      <div className="new-item__main">
        <button onClick={handleClick} value="new">
          New Item Works
        </button>
      </div>

      {expand && (
        <form>
          <input
            onChange={handleChange}
            name="name"
            value={inputValues.name}
          ></input>
          <input
            onChange={handleChange}
            name="duration"
            value={inputValues.duration}
          ></input>
          <input
            onChange={handleChange}
            name="description"
            value={inputValues.description}
          ></input>

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
