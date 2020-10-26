import React, { useState, useEffect } from "react";

import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { parseTimer } from "../utils/timer";
const ItemTimeSelector = props => {
  const { handleClick, duration } = props;
  const [custom, setCustom] = useState(false);
  useEffect(() => {
    if (custom) {
      const min = custom.min * 60;
      const sec = custom.sec;
      const total = min + sec;
      handleClick({ duration: total });
    }
  }, [custom]);
  return (
    <>
      <div>
        <div>
          Duracion: {parseTimer(duration).hours} hrs
          {parseTimer(duration).minutes} mins
        </div>
        <Button onClick={() => handleClick({ duration: 1800 })} size="small">
          Corta
        </Button>
        <Button onClick={() => handleClick({ duration: 2700 })} size="small">
          Mediana
        </Button>
        <Button onClick={() => handleClick({ duration: 3600 })} size="small">
          Larga
        </Button>
        <Button onClick={() => setCustom({ min: 0, sec: 0 })} size="small">
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
              value={custom.min}
              onChange={evn => setCustom({ ...custom, min: evn.target.value })}
            >
              {[0, 1, 2, 3, 4, 5].map((min, k) => (
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
              labelId="custom-task-duration-sec"
              id="custom-task-duration-sec"
              value={custom.sec}
              onChange={evn => setCustom({ ...custom, sec: evn.target.value })}
            >
              {[0, 1, 2, 3, 4, 5].map((sec, k) => (
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
