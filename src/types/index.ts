export type TaskType = {
  _id: String;
  name: String;
  duration: number;
  description: String;
  completed: boolean;
  completitionTime: number;
  startDate: String;
  endDate: String;
  creationDate: String;
};
export type ListType = {
  _id: String;
  name: String;
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
