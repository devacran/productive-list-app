import React from "react";

const ListItemHeader = props => {
  const { handleListSortType } = props;
  const handleClick = evn => {
    const type = evn.target.value;
    handleListSortType(type);
  };
  return (
    <div className="list-item-header">
      <div>ListItemHeader WORKS</div>
      <button onClick={handleClick} value="date">
        date
      </button>
      <button onClick={handleClick} value="name">
        name
      </button>
    </div>
  );
};
export default ListItemHeader;
