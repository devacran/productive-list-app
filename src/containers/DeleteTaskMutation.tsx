import { gql, useMutation } from "@apollo/client";
const DELETE_TASK = gql`
  mutation deleteTask($taskID: ID!) {
    deleteTask(taskID: $taskID)
  }
`;

export const DeleteTaskMutation = ({ children }) => {
  const [deleteTask, { data, loading, error }] = useMutation(DELETE_TASK);
  return children([deleteTask, { data, loading, error }]);
};
