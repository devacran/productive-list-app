const listReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_NEW_TASK_TO_LIST":
      return {
        ...state,
        data: { ...state.data, tasks: [...state.data.tasks, action.payload] }
      };
    case "REMOVE_TASK_FROM_LIST":
      return {
        ...state,
        data: {
          ...state.data,
          tasks: state.data.tasks.filter(({ id }) => id !== action.payload)
        }
      };
    case "UPDATE_TASK_DATA_FROM_LIST":
      return {
        ...state,
        data: {
          ...state.data,
          tasks: state.data.tasks.map(task => {
            if (task.id === action.payload.id) {
              return Object.assign({}, task, action.payload);
            }
            return task;
          })
        }
      };
    default:
      return state;
  }
};
export default listReducer;
