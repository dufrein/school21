import { checkIsSomeDay } from "@helpers/checkIsSomeDay";

export const getDateFormatted = (date: number | string) => {
  const isDateToday = checkIsSomeDay(date);

  return isDateToday
    ? new Date(date).toLocaleDateString()
    : new Date(date).toLocaleString().slice(0, -3);
};
