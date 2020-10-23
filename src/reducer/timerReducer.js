const timeReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TASK_TIMER":
      console.log("hola");
      return action.payload;
    case "SET_TIMER_STATUS":
      return {
        ...state,
        timerStatus: action.payload
      };
    case "SET_TIMER_REMIND":
      return {
        ...state,
        remaindTime: action.payload
      };
    default:
      return state;
  }
};
export default timeReducer;
