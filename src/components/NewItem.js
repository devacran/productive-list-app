import React, { useState } from "react";

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
  return (
    <div className="new-item">
      <button onClick={handleClick} value="new">
        New Item Works
      </button>

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

          <button onClick={handleClick} value="cancel">
            CANCEL
          </button>
          <button onClick={handleSubmit} type="submit">
            SAVE
          </button>
        </form>
      )}
    </div>
  );
};
export default NewItem;
