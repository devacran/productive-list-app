const currentTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_TASK":
      return {
        ...state,
        data: action.payload
      };
    case "UPDATE_CURRENT_TASK_DATA":
      console.log(action.payload);
      return {
        ...state,
        data: { ...state.data, ...action.payload }
      };
    case "SET_CURRENT_TASK_COMPLETED":
      const completitionTime = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          completed: completitionTime ? true : false,
          completitionTime
        }
      };
    default:
      return state;
  }
};
export default currentTaskReducer;
