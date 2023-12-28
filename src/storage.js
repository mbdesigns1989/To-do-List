const addStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default addStorage;
