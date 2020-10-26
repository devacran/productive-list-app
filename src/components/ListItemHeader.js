import React, { useState } from "react";
import ListFilterMenu from "./ListFilterMenu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ListSortMenu from "./ListSortMenu";
const ListItemHeader = props => {
  const {
    handleListSortType,
    handleListFilters,
    data,
    listName,
    sortType
  } = props;
  const [expand, setExpand] = useState(false);
  const handleClick = evn => {
    expand ? setExpand(false) : setExpand(true);
  };
  return (
    <div className="list-item-header">
      <div>Trabajando en : {data.name}</div>
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
