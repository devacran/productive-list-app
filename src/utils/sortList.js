//sort list by options {type: order:}
class SortList {
  constructor() {}
  by(list, options) {
    const { type, order } = options;
    let l;
    switch (type) {
      case "date":
        l = this.sortListByCreationDate(list);
        return l;
      case "duration":
        l = this.sortListByDuration(list);
        return l;
      default:
    }
  }

  sortListByStartDate(list) {
    const _list = [...list];
    _list.sort((a, b) => {
      const da = new Date(a.startDate);
      const db = new Date(b.startDate);
      return db - da;
    });
    return _list;
  }
  sortListByDuration(list) {
    const _list = [...list];
    _list.sort((a, b) => {
      const da = new Date(a.duration);
      const db = new Date(b.duration);
      return db - da;
    });
    return _list;
  }
  sortListByCreationDate(list) {
    const _list = [...list];
    _list.sort((a, b) => {
      const da = new Date(a.creationDate);
      const db = new Date(b.creationDate);
      return db - da;
    });
    return _list;
  }
  sortListByName(list) {
    const _list = [...list];
    _list.sort((a, b) => {
      const na = a.name.toUpperCase();
      const nb = b.name.toUpperCase();
      return nb - na;
    });
    return _list;
  }
}
export const sortList = new SortList();
