const timeReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TASK_TIMER":
      return action.payload;
    case "SET_TIMER_STATUS":
      return {
        ...state,
        timerStatus: action.payload
      };
    default:
      return state;
  }
};
export default timeReducer;
