export type TaskType = {
  _id: String;
  name: String;
  duration: number;
  description: String;
  completed: Boolean;
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

type ListFilterTypes = {
  period: Boolean & null;
  duration: Boolean & null;
  completed: Boolean & null;
};

enum SortList {
  date = "date",
  duration = "duration"
}
export type SortListTypes = "date" | "duration";

export enum TimerStatusTypes {
  idle = "idle",
  stop = "stop",
  pause = "pause",
  continue = "continue",
  inProgress = "inProgress"
}
