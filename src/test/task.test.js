import { addTask, removeTask } from '../module/task';

jest.mock('../module/storage.js');

let tasks = [
  { description: 'study jest', completed: false, index: 1 },
  { description: 'join standup', completed: true, index: 2 },
];

describe('Add Tasks', () => {
  it('add new task', () => {
    tasks.push(addTask(tasks, 'learn ES6'));
    expect(tasks[2]).toEqual({
      description: 'learn ES6',
      completed: false,
      index: 3,
    });
  });

  it('Task array should have a length of 3', () => {
    expect(tasks).toHaveLength(3);
  });
});

describe('Remove Task', () => {
  it('Remove single task', () => {
    expect(tasks.length).toBe(3);
    tasks = removeTask(2, tasks);
    expect(tasks.length).toBe(2);
  });
});
