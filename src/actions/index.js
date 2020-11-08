export const setCurrentTask = payload => ({
  type: "SET_CURRENT_TASK",
  payload
});

export const updateCurrentTaskData = payload => ({
  type: "UPDATE_CURRENT_TASK_DATA",
  payload
});

export const updateTaskDataFromList = payload => ({
  type: "UPDATE_TASK_DATA_FROM_LIST",
  payload
});

export const setNewTaskToList = payload => ({
  type: "SET_NEW_TASK_TO_LIST",
  payload
});
export const setListData = payload => ({
  type: "SET_LIST_DATA",
  payload
});
export const removeTaskFromList = payload => ({
  type: "REMOVE_TASK_FROM_LIST",
  payload
});
export const setListSortType = payload => ({
  type: "SET_LIST_SORT_TYPE",
  payload
});
export const setListFilters = payload => ({
  type: "SET_LIST_FILTERS",
  payload
});

export const setTaskTimer = payload => ({
  type: "SET_TASK_TIMER",
  payload
});
export const setTimerRemind = payload => ({
  type: "SET_TIMER_REMIND",
  payload
});
export const setTimerStatus = payload => ({
  type: "SET_TIMER_STATUS",
  payload
});
