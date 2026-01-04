export const checkIsSomeDay = (date1: number | string, date2?: number | string) => {
  return (
    new Date(date1).toLocaleDateString() ===
    (date2 ? new Date(date2) : new Date()).toLocaleDateString()
  );
};
