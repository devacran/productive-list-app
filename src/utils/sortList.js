export const sortListByStartDate = list => {
  const _list = [...list];
  _list.sort((a, b) => {
    const da = new Date(a.startDate);
    const db = new Date(b.startDate);
    return db - da;
  });
  return _list;
};
export const sortListByName = list => {
  const _list = [...list];
  _list.sort((a, b) => {
    const na = a.name.toUpperCase();
    const nb = b.name.toUpperCase();
    return nb - na;
  });
  return _list;
};
