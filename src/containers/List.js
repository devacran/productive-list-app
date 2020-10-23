import React from "react";
import ListItemHeader from "../components/ListItemHeader";
import Item from "./Item";
import NewItem from "../components/NewItem";

const List = () => {
  return (
    <div className="list">
      <ListItemHeader></ListItemHeader>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <NewItem></NewItem>
    </div>
  );
};
export default List;
