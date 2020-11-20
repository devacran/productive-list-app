import { TaskType, SortListTypes } from "../types";

class SortList {
  constructor() {}
  by(list: TaskType[], options: { type: SortListTypes }): TaskType[] {
    const { type } = options;
    let l: TaskType[];
    switch (type) {
      case "date":
        l = this.sortListByCreationDate(list);
        return l;
      case "duration":
        l = this.sortListByDuration(list);
        return l;
      default:
        return list;
    }
  }

  sortListByStartDate(list: TaskType[]) {
    const _list = [...list];
    _list.sort((a, b) => {
      const da = new Date(a.startDate);
      const db = new Date(b.startDate);
      return db.getTime() - da.getTime();
    });
    return _list;
  }
  sortListByDuration(list: TaskType[]) {
    const _list = [...list];
    _list.sort((a, b) => {
      //If task is completed takes the completitionTime if not takes duration
      const ta = a.completitionTime ? a.completitionTime : a.duration;
      const tb = b.completitionTime ? b.completitionTime : b.duration;
      const da = new Date(ta);
      const db = new Date(tb);
      return db.getTime() - da.getTime();
    });
    return _list;
  }
  sortListByCreationDate(list: TaskType[]): TaskType[] {
    const _list = [...list];
    _list.sort((a, b) => {
      const da = new Date(a.creationDate);
      const db = new Date(b.creationDate);
      return db.getTime() - da.getTime();
    });
    return _list;
  }
}
export const sortList = new SortList();
