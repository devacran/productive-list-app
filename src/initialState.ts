import { initialDataGenerator } from "./initialDataGenerator";
import { TimerStatusTypes } from "./types";
const list = {
  data: {
    _id: "5f9da6bc7556b8ad90fcc386",
    name: "MyList",
    tasks: initialDataGenerator()
  },
  edit: false, //this toggle when user edit a task
  sort: "date", //sort could be 'date' or 'name'
  filters: { period: null, duration: null, completed: null }
};
const timer = {
  duration: 34, //this value is setted from the currentTask duration
  remaindTime: 11,
  timerStatus: TimerStatusTypes.IDLE
};

//This is setted by default with the most recent item from List considering the date.
const currentTask = {
  edit: false,
  data: {
    _id: "123",
    name: "Tarea 1",
    duration: 34,
    description: "",
    completed: false,
    completitionTime: 23,
    startDate: "Thu Oct 22 2020 17:01:25 GMT-0500 (Central Daylight Time)",
    endDate: "Thu Oct 22 2020 17:01:50 GMT-0500 (Central Daylight Time)",
    creationDate: "Thu Oct 22 2020 15:01:50 GMT-0500 (Central Daylight Time)"
  }
};

const initialState = {
  list,
  timer,
  currentTask
};
export default initialState;
// Argument of type '{ list: { data: { _id: string; name: string; tasks: any[]; }; edit: boolean; sort: string; filters: { period: any; duration: any; completed: any; }; }; timer: { duration: number; remaindTime: number; timerStatus: string; }; currentTask: { ...; }; }' is not assignable to parameter of type '{ list?: { data: { tasks: (string | ListType | TaskType | ListFilterTypes)[]; _id: string; name: string; }; edit: boolean; sort: SortListTypes; filters: { ...; }; } | { ...; } | { ...; } | { ...; }; timer?: number | ... 2 more ... | { ...; }; currentTask?: { ...; } | { ...; }; }'.
//   Types of property 'timer' are incompatible.
//     Type '{ duration: number; remaindTime: number; timerStatus: string; }' is not assignable to type 'number | TimerStatusTypes | { timerStatus: number | TimerType | TimerStatusTypes; duration: number; remaindTime: number; } | { ...; }'.
//       Type '{ duration: number; remaindTime: number; timerStatus: string; }' is not assignable to type '{ remaindTime: number | TimerType | TimerStatusTypes; duration: number; timerStatus: TimerStatusTypes; }'.
//         Types of property 'timerStatus' are incompatible.
//           Type 'string' is not assignable to type 'TimerStatusTypes'.
