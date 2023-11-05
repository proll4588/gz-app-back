export const unixToDate = (unixDate: number) => {
  return new Date(unixDate * 1000);
};
