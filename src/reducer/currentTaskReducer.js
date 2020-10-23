const currentTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_TASK":
      return action.payload;
    default:
      return state;
  }
};
export default currentTaskReducer;
