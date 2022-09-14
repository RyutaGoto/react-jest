export const forEach = (items: number[], callback: (item: number) => number) => {
  return items.map((item) => {
    return callback(item);
  });
};
