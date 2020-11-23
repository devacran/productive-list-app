import { TimerActionTypes, TimerState, TimerStatusTypes } from "../types";

const initialState: TimerState = {
  duration: 0,
  remaindTime: 0,
  timerStatus: TimerStatusTypes.STOP
};

const timeReducer = (state = initialState, action: TimerActionTypes) => {
  switch (action.type) {
    case "SET_TASK_TIMER":
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
