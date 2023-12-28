let items = [];
export const addStorage = (tasks) => {
  items = tasks;
  return items;
};

export const getStorage = () => items;
