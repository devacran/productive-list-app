import React, { useState } from "react";

import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

const ItemTimeSelector = ({ handleClick }) => {
  const [custom, setCustom] = useState(false);
  return (
    <>
      <div>
        <div>Duracion</div>
        <Button onClick={() => handleClick({ duration: 9000 })} size="small">
          Corta
        </Button>
        <Button onClick={() => handleClick({ duration: 25000 })} size="small">
          Mediana
        </Button>
        <Button onClick={() => handleClick({ duration: 34000 })} size="small">
          Larga
        </Button>
        <Button onClick={() => setCustom(true)} size="small">
          Personalizado
        </Button>
      </div>
      {custom && (
        <>
          <FormControl variant="filled" className={"classes.formControl"}>
            <InputLabel id="demo-simple-select-filled-label">
              Minutos
            </InputLabel>
            <Select
              labelId="custom-task-duration-mins"
              id="custom-task-duration-mins"
              value={"1"}
              onChange={evn => console.log(evn.currentTarget.value)}
            >
              {[1, 2, 3, 4, 5].map((min, k) => (
                <MenuItem key={k} value={min}>
                  {min}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="filled" className={"classes.formControl"}>
            <InputLabel id="demo-simple-select-filled-label">
              Segundos
            </InputLabel>
            <Select
              labelId="custom-task-duration-mins"
              id="custom-task-duration-mins"
              value={"1"}
              onChange={evn => console.log(evn.target.value)}
            >
              {[1, 2, 3, 4, 5].map((sec, k) => (
                <MenuItem key={k} value={sec}>
                  {sec}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
    </>
  );
};
export default ItemTimeSelector;
