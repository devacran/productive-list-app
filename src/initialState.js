const list = {
  data: {
    id: "123",
    name: "MyList",
    tasks: [
      {
        id: "123",
        name: "Tarea Vieja",
        duration: 1500000,
        description: "",
        completed: false,
        completitionTime: 23,
        startDate: "Thu Oct 22 2020 17:01:25 GMT-0500 (Central Daylight Time)",
        endDate: "Thu Oct 22 2020 17:01:50 GMT-0500 (Central Daylight Time)",
        creationDate:
          "Thu Oct 11 2020 15:01:50 GMT-0500 (Central Daylight Time)"
      },
      {
        id: "124",
        name: "Tarea menos vieja",
        duration: 95000,
        description: "",
        completed: false,
        completitionTime: 17,
        startDate: "Fri Oct 23 2020 09:10:16 GMT-0500 (Central Daylight Time)",
        endDate: "Fri Oct 23 2020 09:10:30 GMT-0500 (Central Daylight Time)",
        creationDate:
          "Thu Oct 15 2020 15:01:50 GMT-0500 (Central Daylight Time)"
      }
    ]
  },
  edit: false, //this toggle when user edit a task
  sort: "date", //sort could be 'date' or 'name'
  filter: null
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
