const listReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_NEW_TASK_TO_LIST":
      return {
        ...state,
        data: { ...state.data, tasks: [...state.data.tasks, action.payload] }
      };
      break;
    case "REMOVE_TASK_FROM_LIST":
      return {
        ...state,
        data: {
          ...state.data,
          tasks: state.data.tasks.filter(({ id }) => id !== action.payload)
        }
      };
      break;
    default:
      return state;
  }
};
export default listReducer;
