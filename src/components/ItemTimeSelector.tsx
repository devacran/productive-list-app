import * as React from "react";
import { useState, useEffect } from "react";

import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import ItemTimeDisplay from "./ItemTimeDisplay";

type props = {
  handleClick: (duration: { duration: number }) => void;
  duration: String;
};
const ItemTimeSelector = (props: props) => {
  const { handleClick, duration } = props;
  const [custom, setCustom] = useState<{ min: number; sec: number } | null>(
    null
  );
  const generateSecRange = () => {
    let n = 0;
    let s = [];
    while (n < 60) {
      s.push(n);
      n++;
    }
    return s;
  };
  const generateMinRange = () => {
    let n = 0;
    let s = [];
    while (n < 121) {
      s.push(n);
      n++;
    }
    return s;
  };

  const secRange = generateSecRange();
  const minRange = generateMinRange();

  useEffect(() => {
    if (custom) {
      const min = custom.min * 60;
      const sec = custom.sec;
      const total = min + sec;
      handleClick({ duration: total });
    }
  }, [custom]);
  return (
    <div className="item-time-selector">
      <div>
        <div className="item-time-selector__duration">
          <span>Duracion:</span>
          <ItemTimeDisplay time={duration} />
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
        <div className="item-time-selector__custom">
          <FormControl variant="filled" className={"classes.formControl"}>
            <InputLabel id="demo-simple-select-filled-label">
              Minutos
            </InputLabel>
            <Select
              labelId="custom-task-duration-mins"
              id="custom-task-duration-mins"
              value={custom.min}
              onChange={evn =>
                setCustom({ ...custom, min: evn.target.value as number })
              }
            >
              {minRange.map((min, k) => (
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
              onChange={evn =>
                setCustom({ ...custom, sec: evn.target.value as number })
              }
            >
              {secRange.map((sec, k) => (
                <MenuItem key={k} value={sec}>
                  {sec}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
    </div>
  );
};
export default ItemTimeSelector;
