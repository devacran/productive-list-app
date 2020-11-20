export interface TaskType {
  _id?: string;
  __typename?: string;
  name?: string;
  duration?: number;
  description?: string;
  completed?: boolean;
  completitionTime?: number;
  startDate?: string;
  endDate?: string;
  creationDate?: string;
}
export interface ListType {
  _id: string;
  name: string;
  tasks: TaskType[];
}

export interface ListFilterTypes {
  // period: boolean & null;
  duration: string | null;
  completed: boolean | null;
}

export type SortListTypes = "date" | "duration";

export enum TimerStatusTypes {
  IDLE = "idle",
  STOP = "stop",
  PAUSE = "pause",
  CONTINUE = "continue",
  IN_PROGRESS = "inProgress"
}

export interface TimerType {
  duration: number;
  remaindTime: number;
  timerStatus: TimerStatusTypes;
}
//------------------------------------------------//
//---------------Redux Types ---------------------//
//------------------------------------------------//

//-----State Types-------//

export interface CurrentTaskState {
  edit: boolean;
  data: TaskType;
}

export interface ListState {
  data: ListType;
  edit: boolean; //this toggle when user edit a task
  sort: SortListTypes; //sort could be 'date' or 'name'
  filters: ListFilterTypes;
}

export interface TimerState extends TimerType {}

//-----Action Types-------//
interface SetCurrentTaskType {
  type: string;
  payload;
}

interface UpdateCurrentTaskDataType {
  type: string;
  payload;
}

interface UpdateTaskDataFromListType {
  type: string;
  payload;
}

interface SetNewTaskToListType {
  type: string;
  payload;
}
interface SetListDataType {
  type: string;
  payload;
}
interface RemoveTaskFromListType {
  type: string;
  payload;
}
interface SetListSortType {
  type: string;
  payload;
}
interface SetListFiltersType {
  type: string;
  payload;
}

interface SetTaskTimerType {
  type: string;
  payload;
}
interface SetTimerRemindType {
  type: string;
  payload;
}
interface SetTimerStatusType {
  type: string;
  payload;
}

export type CurrentTaskActionTypes =
  | SetCurrentTaskType
  | UpdateCurrentTaskDataType;

export type ListActionTypes =
  | UpdateTaskDataFromListType
  | SetNewTaskToListType
  | SetListDataType
  | RemoveTaskFromListType
  | SetListSortType
  | SetListFiltersType;

export type TimerActionTypes =
  | SetTaskTimerType
  | SetTimerRemindType
  | SetTimerStatusType;
