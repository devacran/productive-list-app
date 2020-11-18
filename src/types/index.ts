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
