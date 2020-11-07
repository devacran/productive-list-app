import React, { useEffect } from "react";
import { connect } from "react-redux";

import { gql, useQuery, useMutation } from "@apollo/client";
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
const WithListData = ({ children, selectedListID }) => {
  const { data = {}, loading, error } = useQuery(GET_LIST, {
    variables: { listID: selectedListID }
  });
  const listData = data.getList ? data.getList.tasks : [];
  return children({ data: listData, loading, error });
};
const mapStateToProps = state => ({
  selectedListID: state.list._id
});
export default connect(mapStateToProps)(WithListData);
