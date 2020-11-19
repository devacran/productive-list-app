import React, { FC } from "react";
import { Button } from "@material-ui/core";

type HeaderProps = {
  handleOpenStatsModal: (status: boolean) => void;
};

const Header: FC<HeaderProps> = ({ handleOpenStatsModal }: HeaderProps) => {
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
