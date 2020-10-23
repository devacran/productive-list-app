import React from "react";
import { Button } from "@material-ui/core";
const Header = () => {
  return (
    <div className="header">
      <div className="header__item-1">Header Works</div>
      <div className="header__item-2">
        <Button variant="contained" color="primary">
          Stats
        </Button>
      </div>
    </div>
  );
};
export default Header;
