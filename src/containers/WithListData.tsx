import React, { FC } from "react";
import { setListData as _setListData } from "../actions";
import { connect } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { ListType, TaskType } from "../types";

const GET_LIST = gql`
  query getListData($listID: ID!) {
    getList(listID: $listID) {
      _id
      user_id
      name
      tasks {
        _id
        name
        duration
        description
        completed
        completitionTime
        startDate
        endDate
        creationDate
      }
    }
  }
`;

type WithListDataProps = {
  currentList: ListType;
  currentListTasks: TaskType[];
  setListData: (data: ListType) => void;
  children: (props) => FC;
};
const WithListData = (props: WithListDataProps) => {
  const { children, currentList, setListData, currentListTasks } = props;
  const { data = {}, loading, error } = useQuery(GET_LIST, {
    variables: { listID: currentList }
  });
  React.useEffect(() => {
    if (data.getList) {
      setListData(data.getList);
    }
  }, [data]);

  return children({ data: currentListTasks, loading, error });
};
const mapStateToProps = state => ({
  currentList: state.list.data._id,
  currentListTasks: state.list.data.tasks
});
const mapDispatchToProps = {
  setListData: _setListData
};
export default connect(mapStateToProps, mapDispatchToProps)(WithListData);
