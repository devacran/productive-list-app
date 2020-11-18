import * as React from "react";
import { useState, useEffect } from "react";

import { TextField } from "@material-ui/core";

type props = {
  description: String;
  setDescription: (description: String) => void;
};

const ItemDescription = ({ description, setDescription }: props) => {
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    setExpand(true);
  };
  useEffect(() => {
    description !== "" && setExpand(true);
  }, [description]);
  return (
    <div className="item__description">
      {!expand && <button onClick={handleClick}>+Añadir una nota</button>}
      {expand && (
        <TextField
          id="filled-multiline-static"
          label="Inserta una nota"
          multiline
          rows={4}
          defaultValue={description}
          onChange={evn => setDescription(evn.target.value)}
          variant="filled"
        />
      )}
    </div>
  );
};
export default ItemDescription;
