import React, { FC } from "react";
import Timer from "./Timer";
import List from "./List";
import WithListData from "./WithListData";
import { UpdateTaskMutation } from "./UpdateTaskMutation";

const Home: FC = () => {
  return (
    <div className="home">
      <UpdateTaskMutation>
        {([updateTask]) => <Timer updateTask={updateTask} />}
      </UpdateTaskMutation>
      {/* @ts-ignore-next-line  */}
      <WithListData>{({ data }) => <List list={data} />}</WithListData>
    </div>
  );
};

export default Home;
