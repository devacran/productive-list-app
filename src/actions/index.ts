import {
  CurrentTaskActionTypes,
  ListActionTypes,
  TimerActionTypes,
  TaskType,
  ListType,
  SortListTypes,
  ListFilterTypes,
  TimerType,
  TimerStatusTypes
} from "../types";

export const setCurrentTask = (payload: TaskType): CurrentTaskActionTypes => ({
  type: "SET_CURRENT_TASK",
  payload
});

export const updateCurrentTaskData = (
  payload: {} & TaskType
): CurrentTaskActionTypes => ({
  type: "UPDATE_CURRENT_TASK_DATA",
  payload
});

export const updateTaskDataFromList = (
  payload: {} & TaskType
): ListActionTypes => ({
  type: "UPDATE_TASK_DATA_FROM_LIST",
  payload
});

export const setNewTaskToList = (payload: TaskType): ListActionTypes => ({
  type: "SET_NEW_TASK_TO_LIST",
  payload
});
export const setListData = (payload: ListType): ListActionTypes => ({
  type: "SET_LIST_DATA",
  payload
});
export const removeTaskFromList = (payload: string): ListActionTypes => ({
  type: "REMOVE_TASK_FROM_LIST",
  payload
});
export const setListSortType = (payload: SortListTypes): ListActionTypes => ({
  type: "SET_LIST_SORT_TYPE",
  payload
});
export const setListFilters = (payload: ListFilterTypes): ListActionTypes => ({
  type: "SET_LIST_FILTERS",
  payload
});

export const setTaskTimer = (payload: TimerType): ListActionTypes => ({
  type: "SET_TASK_TIMER",
  payload
});
export const setTimerRemind = (payload: number): TimerActionTypes => ({
  type: "SET_TIMER_REMIND",
  payload
});
export const setTimerStatus = (
  payload: TimerStatusTypes
): TimerActionTypes => ({
  type: "SET_TIMER_STATUS",
  payload
});
