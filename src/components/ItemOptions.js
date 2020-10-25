import React from "react";
import ItemTimeSelector from "../components/ItemTimeSelector";
import ItemDescription from "../components/ItemDescription";
import { Button } from "@material-ui/core";
const ItemOptions = () => {
  return (
    <div className="item__options">
      <ItemTimeSelector handleClick={handleTaskDuration} />
      <ItemDescription
        description={inputValues.description}
        setDescription={handleDescription}
      />
      <form onSubmit={handleSubmit}>
        <Button onClick={handleClick} color="secondary" name="delete">
          Borrar
        </Button>
        <Button>Cancel</Button>
        <Button color="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};
export default ItemOptions;
