import * as React from "react";
import { useState } from "react";
import ListFilterMenu from "./ListFilterMenu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ListSortMenu from "./ListSortMenu";
import { TaskType, SortListTypes } from "../types";

type props = {
  handleListSortType: () => void;
  handleListFilters: () => void;
  data: TaskType;
  listName: String;
  sortType: SortListTypes;
};
const ListItemHeader = (props: props) => {
  const {
    handleListSortType,
    handleListFilters,
    data,
    listName,
    sortType
  } = props;
  const [expand, setExpand] = useState(false);
  const handleClick = () => {
    expand ? setExpand(false) : setExpand(true);
  };
  return (
    <div className="list-item-header">
      <div className="list-item-header__current">
        Trabajando en : {data.name}
      </div>
      <div className="list-item-header__main">
        <h1>{listName}</h1>
        <button
          className="options-button options-button--transparent"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </button>
      </div>
      {expand && (
        <div className="list-item-header__options">
          <ListFilterMenu handleListFilters={handleListFilters} />
          <ListSortMenu sortType={sortType} setSortType={handleListSortType} />
        </div>
      )}
    </div>
  );
};
export default ListItemHeader;
