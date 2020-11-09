import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
const UPDATE_TASK = gql`
  mutation updateTask($input: TaskUpdate!, $taskID: ID!) {
    updateTask(input: $input, taskID: $taskID) {
      _id
      name
      duration
      description
      creationDate
    }
  }
`;

export const UpdateTaskMutation = ({ children }) => {
  const [update, { data, loading, error }] = useMutation(UPDATE_TASK);
  return children([update, { data, loading, error }]);
};
