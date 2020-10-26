import React from "react";
import ListFilterMenu from "./ListFilterMenu";
const ListItemHeader = props => {
  const { handleListSortType, data } = props;
  const handleClick = evn => {
    const type = evn.target.value;
    handleListSortType(type);
  };
  return (
    <div className="list-item-header">
      <div>Trabajando en : {data.name}</div>
      <ListFilterMenu />
      <button>Prueba</button>
      <button onClick={handleClick} value="date">
        date
      </button>
      <button onClick={handleClick} value="duration">
        duration
      </button>
    </div>
  );
};
export default ListItemHeader;
