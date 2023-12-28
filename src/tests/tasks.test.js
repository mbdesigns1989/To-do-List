import {
  setTask, clearCompleted, editTask, deleteTask,
} from '../tasks';

import completed from '../mocks/completed';

jest.mock('../storage.js');



describe('Set Tasks', () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      { description: 'study jest', completed: false, index: 1 },
      { description: 'join standup', completed: true, index: 2 },
    ];
  });

  it('should add a new task', () => {
    const newTask = setTask(tasks, 'learn ES6');
    tasks.push(newTask);

    expect(tasks[2]).toEqual({
      description: 'learn ES6',
      completed: false,
      index: 3,
    });
  });

  it('should have a length of 3 after adding a new task', () => {
    const newTask = setTask(tasks, 'learn ES6');
    tasks.push(newTask);

    expect(tasks).toHaveLength(3);
  });
});




describe('Delete Task', () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      { description: 'learn some coding', completed: false, index: 1 },
      { description: 'get some rest', completed: true, index: 2 },
      { description: 'finish project', completed: true, index: 3 },
    ];
  });

  it('should remove a single task', () => {
    expect(tasks.length).toBe(3);
    tasks = deleteTask(2, tasks);
    expect(tasks.length).toBe(2);
  });

  it('should update the index value of remaining tasks after deletion', () => {
    tasks = deleteTask(2, tasks);
    expect(tasks[1].index).toBe(2);
  });
});




describe('Edit Task', () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      { description: 'get some rest', completed: false, index: 1 },
      { description: 'learn coding', completed: true, index: 2 },
      { description: 'learn algorithms', completed: false, index: 3 },
    ];
  });

  it('should edit task description', () => {
    const update = {
      description: 'new task description',
      completed: false,
      index: 1,
    };

    const updatedTasks = editTask(update, tasks);

    expect(updatedTasks).toEqual([
      {
        description: 'new task description',
        completed: false,
        index: 1,
      },
      { description: 'learn coding', completed: true, index: 2 },
      { description: 'learn algorithms', completed: false, index: 3 },
    ]);
  });
});



describe('Clear completed', () => {
  let removeCompleted;

  beforeEach(() => {
    removeCompleted = [
      { description: 'submit excercises', completed: false, index: 1 },
      { description: 'get some sleep', completed: true, index: 2 },
      { description: 'submit project', completed: true, index: 3 },
    ];
  });

  it('should clear all completed tasks', () => {
    const result = clearCompleted(removeCompleted);

    expect(result).toEqual([
      { description: 'submit excercises', completed: false, index: 1 },
    ]);
  });

  it('should check the length of the array after removing completed tasks', () => {
    const result = clearCompleted(removeCompleted);

    expect(result).toHaveLength(1);
  });
});

