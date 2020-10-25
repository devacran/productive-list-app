import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
const ListFilterMenu = () => {
  const [filters, setFilters] = useState({ duration: null });

  const handleChange = evn => {
    const selectorValue = evn.target.value;
    setFilter(selectorValue);
  };

  return (
    <FormControl variant="filled" className={"classes.formControl"}>
      <InputLabel id="demo-simple-select-filled-label">Filtrar</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={filters.duration || "none"}
        onChange={handleChange}
      >
        <MenuItem value="none">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"short"}>short</MenuItem>
        <MenuItem value={"middle"}>middle</MenuItem>
        <MenuItem value={"large"}>large</MenuItem>
      </Select>
    </FormControl>
  );
};
export default ListFilterMenu;
