import { gql, useMutation } from "@apollo/client";
const CREATE_TASK = gql`
  mutation createTask($input: TaskCreate!, $listID: ID!) {
    createTask(input: $input, listID: $listID) {
      _id
      name
      duration
      description
      creationDate
    }
  }
`;

export const CreateTaskMutation = ({ children }) => {
  const [create, { data, loading, error }] = useMutation(CREATE_TASK);
  return children([create, { data, loading, error }]);
};
