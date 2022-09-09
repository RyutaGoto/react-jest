export const fetchData = (callback: (str: string) => void) => {
  setTimeout(() => callback('peanut butter'), 500);
};
