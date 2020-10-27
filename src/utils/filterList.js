class FilterList {
  constructor() {}
  getLastWeekDate() {
    const d = new Date(); //gets today date
    d.setDate(d.getDate() - 7); //sets this day minus 7 days
    return d; //returns date 7 days ago
  }
  byCompleted(list = []) {
    const _list = [...list]; //to avoid mutate the original list
    const filteredList = _list.filter(({ completed }) => completed);
    return filteredList;
  }
  byDuration(options = {}) {
    const { duration, list } = options;
    const _list = [...list]; //to avoid mutate the original list
    let filteredList;
    //To filter the list this function takes completitionTime if task have been finished or duration if not
    switch (duration) {
      case "short":
        filteredList = _list.filter(task => {
          const taskDuration = task.completitionTime
            ? task.completitionTime
            : task.duration;
          return taskDuration <= 1800;
        });
        break;
      case "middle":
        filteredList = _list.filter(task => {
          const taskDuration = task.completitionTime
            ? task.completitionTime
            : task.duration;
          return taskDuration >= 1800 && taskDuration <= 3600;
        });
        break;
      case "large":
        filteredList = _list.filter(task => {
          const taskDuration = task.completitionTime
            ? task.completitionTime
            : task.duration;
          return taskDuration >= 3600;
        });
        break;
      default:
    }
    return filteredList;
  }
  byPeriod(options = {}) {
    const { period, list } = options;
    const _list = [...list]; //to avoid mutate the original list
    const lastWeekDate = this.getLastWeekDate();
    let filteredList;
    switch (period) {
      case "week":
        filteredList = _list.filter(
          task => new Date(task.endDate) > lastWeekDate
        ); //compares the task date be mayor than last week date
        break;
      case "day":
        filteredList = _list;
        break;
      case "month":
        filteredList = _list;
        break;
      default:
    }
    return filteredList;
  }

  byOptions(list, options) {
    let _list = [...list];
    if (options.duration) {
      _list = this.byDuration({ duration: options.duration, list });
    }
    if (options.period) {
      _list = this.byPeriod({ period: options.period, list });
    }
    if (options.completed) {
      _list = this.byCompleted(list);
    }
    return _list;
  }
}
export const filterList = new FilterList(); //To have a singleton
