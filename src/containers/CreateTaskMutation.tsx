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

interface NewTaskVars {
  input: {
    name: string;
    duration: number;
    description: string;
  };
  listID: string;
}

export const CreateTaskMutation = ({ children }) => {
  const [create, { data, loading, error }] = useMutation<
    { create: string },
    NewTaskVars
  >(CREATE_TASK);
  return children([create, { data, loading, error }]);
};
