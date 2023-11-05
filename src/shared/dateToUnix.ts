export const dateToUnix = (date: Date) => {
  return Math.floor(date.getTime() / 1000);
};
