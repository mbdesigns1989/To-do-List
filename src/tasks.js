import addStorage from './storage';

const updatedIndex = (tasks) => {
  const updated = Math.max(...tasks.map((item) => item.index), 1);
  const id = updated + 1;
  return id;
};

export function setTask(tasks, description) {
  const newTask = { description, completed: false, index: updatedIndex(tasks) };
  return newTask;
}

export function deleteTask(index, tasks) {
  const clear = tasks.filter((item) => item.index !== index);
  if (clear.length > 0) {
    let counter = 1;
    clear.forEach((element) => {
      element.index = counter;
      counter += 1;
    });
  }
  addStorage(clear);
  return clear;
}

export function editTask(task, tasks) {
  tasks.forEach((item) => {
    if (item.index === task.index) {
      item.description = task.description;
    }
  });
  addStorage(tasks);
  return tasks;
}

export function clearCompleted(tasks) {
  const deleteCompleted = tasks.filter((item) => item.completed !== true);
  addStorage(deleteCompleted);
  return deleteCompleted;
}
