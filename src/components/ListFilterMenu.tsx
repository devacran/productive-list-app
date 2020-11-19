import React, { FC, useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { ListFilterTypes } from "../types";
type ListFilterMenuProps = {
  handleListFilters: (filters: object) => void;
};

const ListFilterMenu: FC<ListFilterMenuProps> = (
  props: ListFilterMenuProps
) => {
  const [filters, setFilters] = useState<ListFilterTypes>({
    duration: null,
    completed: null
  });

  const handleChange = (evn: React.ChangeEvent<HTMLSelectElement>) => {
    const selectorValue = evn.target.value;
    selectorValue !== "none"
      ? setFilters({ ...filters, duration: selectorValue })
      : setFilters({ ...filters, duration: null });
  };

  const handleToggle = () => {
    setFilters({ ...filters, completed: filters.completed ? null : true });
  };

  useEffect(() => {
    props.handleListFilters(filters);
  }, [filters]);

  return (
    <div className="list-filter-menu">
      Filtrar por
      <div className="list-filter-menu__options">
        <div>
          <FormControl variant="filled" className={""}>
            <InputLabel id="filter-menu-duration">Duración</InputLabel>
            <Select
              labelId="filter-menu-options-duration"
              id="filter-menu-options-duration"
              value={filters.duration || "none"}
              onChange={handleChange}
            >
              <MenuItem value={"none"}>Todas</MenuItem>
              <MenuItem value={"short"}>Corta</MenuItem>
              <MenuItem value={"middle"}>Mediana</MenuItem>
              <MenuItem value={"large"}>Larga</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          Completadas
          <FormControl variant="filled" className={""}>
            <button
              className={
                filters.completed
                  ? "check-button check-button--checked"
                  : "check-button"
              }
              type="button"
              onClick={handleToggle}
            >
              <CheckIcon />
            </button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
export default ListFilterMenu;
