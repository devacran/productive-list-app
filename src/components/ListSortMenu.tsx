import React, { FC } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { SortListTypes } from "../types";

type ListSortMenuProps = {
  sortType: SortListTypes;
  setSortType: (type: SortListTypes) => void;
};

const ListSortMenu: FC<ListSortMenuProps> = (props: ListSortMenuProps) => {
  const { sortType, setSortType } = props;

  const handleChange = (evn: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(evn.target.value as SortListTypes);
  };

  return (
    <div className="list-sort-menu">
      Ordenar Por:
      <div className="list-sort-menu__options">
        <div>
          <FormControl variant="filled">
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
