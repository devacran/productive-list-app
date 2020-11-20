import { gql, useMutation } from "@apollo/client";
const UPDATE_TASK = gql`
  mutation updateTask($input: TaskUpdate!, $taskID: ID!) {
    updateTask(input: $input, taskID: $taskID)
  }
`;
interface TaskUpdate {
  name?: string;
  duration?: number;
  description?: string;
  completed?: Boolean;
  creationDate?: string;
  completitionTime?: number;
  startDate?: string;
  endDate?: string;
}
export const UpdateTaskMutation = ({ children }) => {
  const [update, { data, loading, error }] = useMutation<
    { update: string },
    { input: TaskUpdate; taskID: string }
  >(UPDATE_TASK);
  return children([update, { data, loading, error }]);
};
