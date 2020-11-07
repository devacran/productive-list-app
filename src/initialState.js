import { initialDataGenerator } from "./initialDataGenerator";
const list = {
  _id: "5f9da6bc7556b8ad90fcc386",
  name: "MyList",
  data: {
    id: "123",
    name: "MyList",
    tasks: initialDataGenerator()
    // tasks: [
    //   {
    //     id: "123",
    //     name: "Mi primer tarea",
    //     duration: 1500000,
    //     description: "",
    //     completed: true,
    //     completitionTime: 1100000,
    //     startDate: "Wed Sep 16 2020 07:21:00 GMT-0500 (Central Daylight Time)",
    //     endDate: "Wed Sep 16 2020 06:00:00 GMT-0500 (Central Daylight Time)",
    //     creationDate:
    //       "Wed Sep 16 2020 00:00:00 GMT-0500 (Central Daylight Time)"
    //   },
    //   {
    //     id: "Mi ultima Tarea",
    //     name: "Tarea menos vieja",
    //     duration: 95000,
    //     description: "hola como estas",
    //     completed: false,
    //     completitionTime: 50000,
    //     startDate: "Sun Oct 25 2020 09:23:45 GMT-0600 (Central Standard Time)",
    //     endDate: "Sun Oct 25 2020 09:25:45 GMT-0600 (Central Standard Time)",
    //     creationDate:
    //       "Sun Oct 25 2020 09:23:45 GMT-0600 (Central Standard Time)"
    //   },
    //   {
    //     id: "6661",
    //     name: "AAAAA Tarea",
    //     duration: 1200000,
    //     description: "",
    //     completed: false,
    //     completitionTime: 1200000,
    //     startDate: "Sat Oct 24 2020 09:23:45 GMT-0600 (Central Standard Time)",
    //     endDate: "Sat Oct 24 2020 11:23:45 GMT-0600 (Central Standard Time)",
    //     creationDate:
    //       "Sat Oct 24 2020 09:23:45 GMT-0600 (Central Standard Time)"
    //   },
    //   {
    //     id: "6662",
    //     name: "BBBBB Tarea",
    //     duration: 500000,
    //     description: "",
    //     completed: false,
    //     completitionTime: 500000,
    //     startDate: "Sat Oct 24 2020 03:23:45 GMT-0600 (Central Standard Time)",
    //     endDate: "Sat Oct 24 2020 01:23:45 GMT-0600 (Central Standard Time)",
    //     creationDate:
    //       "Sat Oct 24 2020 01:23:45 GMT-0600 (Central Standard Time)"
    //   },
    //   {
    //     id: "66663",
    //     name: "CCCCCC Tarea",
    //     duration: 3000000,
    //     description: "",
    //     completed: false,
    //     completitionTime: 3000000,
    //     startDate: "Sat Oct 24 2020 04:23:45 GMT-0600 (Central Standard Time)",
    //     endDate: "Sat Oct 24 2020 05:23:45 GMT-0600 (Central Standard Time)",
    //     creationDate:
    //       "Sat Oct 24 2020 04:23:45 GMT-0600 (Central Standard Time)"
    //   }
    // ]
  },
  edit: false, //this toggle when user edit a task
  sort: "date", //sort could be 'date' or 'name'
  filters: { period: null, duration: null, completed: null }
};
const timer = {
  duration: 34, //this value is setted from the currentTask duration
  remaindTime: 11,
  timerStatus: "idle"
};

//This is setted by default with the most recent item from List considering the date.
const currentTask = {
  edit: false,
  data: {
    id: "123",
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
