import { ListState, ListActionTypes } from "../types";

const initialState: ListState = {
  edit: false,
  data: {
    _id: "",
    name: "",
    tasks: []
  },
  sort: "date",
  filters: { duration: null, completed: null }
};

const listReducer = (state = initialState, action: ListActionTypes) => {
  switch (action.type) {
    case "SET_NEW_TASK_TO_LIST":
      return {
        ...state,
        data: { ...state.data, tasks: [...state.data.tasks, action.payload] }
      };
    case "SET_LIST_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "SET_LIST_SORT_TYPE":
      return {
        ...state,
        sort: action.payload
      };
    case "SET_LIST_FILTERS":
      return {
        ...state,
        filters: action.payload
      };
    case "REMOVE_TASK_FROM_LIST":
      return {
        ...state,
        data: {
          ...state.data,
          tasks: state.data.tasks.filter(({ _id }) => _id !== action.payload)
        }
      };
    case "UPDATE_TASK_DATA_FROM_LIST":
      return {
        ...state,
        data: {
          ...state.data,
          tasks: state.data.tasks.map(task => {
            if (task._id === action.payload._id) {
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
