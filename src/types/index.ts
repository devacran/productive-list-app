export type TaskType = {
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
};
export type ListType = {
  _id: string;
  name: string;
  tasks: TaskType[];
};

export type ListFilterTypes = {
  // period: boolean & null;
  duration: string | null;
  completed: boolean | null;
};

export type SortListTypes = "date" | "duration";

export enum TimerStatusTypes {
  IDLE = "idle",
  STOP = "stop",
  PAUSE = "pause",
  CONTINUE = "continue",
  IN_PROGRESS = "inProgress"
}

export type TimerType = {
  duration: number;
  remaindTime: number;
  timerStatus: TimerStatusTypes;
};
