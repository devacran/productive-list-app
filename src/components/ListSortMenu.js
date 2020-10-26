import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
const ListSortMenu = props => {
  const { sortType, setSortType } = props;
  const handleChange = evn => {
    setSortType(evn.target.value);
  };
  return (
    <div className="list-sort-menu">
      Ordenar Por:
      <div className="list-sort-menu__options">
        <div>
          <FormControl variant="filled" className={""}>
            <InputLabel id="sort-menu">Tipo</InputLabel>
            <Select
              labelId="sort-menu-options-duration"
              id="sort-menu-options-duration"
              value={sortType}
              onChange={handleChange}
            >
              <MenuItem value={"duration"}>Duracion</MenuItem>
              <MenuItem value={"date"}>Mas Reciente</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
export default ListSortMenu;
