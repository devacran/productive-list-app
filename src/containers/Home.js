import React from "react";

import Timer from "./Timer";
import List from "./List";
import WithListData from "./WithListData";

import { sortList } from "../utils/sortList";

const Home = props => {
  return (
    <div className="home">
      <Timer></Timer>
      <WithListData>
        {({ data, loading, error }) => <List list={data} />}
      </WithListData>
    </div>
  );
};

export default Home;
