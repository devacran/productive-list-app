import { combineReducers } from "redux";
import listReducer from "./listReducer";
import currentTaskReducer from "./currentTaskReducer";
import timerReducer from "./timerReducer";

const reducer = combineReducers({
  list: listReducer,
  timer: timerReducer,
  currentTask: currentTaskReducer
});
export default reducer;
