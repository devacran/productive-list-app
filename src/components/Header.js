import React from "react";
import { Button } from "@material-ui/core";

const Header = props => {
  const { handleOpenStatsModal, handleCloseStatsModal } = props;
  const handleClick = () => {
    handleOpenStatsModal(true);
  };
  return (
    <div className="header">
      <div className="header__item-1">
        <h1>Devacran - ToDoList</h1>
      </div>
      <div className="header__item-2">
        <Button onClick={handleClick} variant="contained" color="primary">
          Stats
        </Button>
      </div>
    </div>
  );
};
export default Header;