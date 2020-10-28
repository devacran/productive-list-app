const currentTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_TASK":
      return {
        ...state,
        data: action.payload
      };
    case "UPDATE_CURRENT_TASK_DATA":
      return {
        ...state,
        data: { ...state.data, ...action.payload }
      };
    case "SET_CURRENT_TASK_START_DATE":
      return {
        ...state,
        data: {
          ...state.data,
          startDate: action.payload
        }
      };
    default:
      return state;
  }
};
export default currentTaskReducer;
