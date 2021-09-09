/**
 * @jest-environment jsdom
 */
import { addTask, deleteTask } from './src/add_remove.js';

describe('adding a task to the list', () => {
  document.body.innerHTML = '<input type="text" placeholder="Add to your list..." id="inputList">';
  const inputList = document.getElementById('inputList');
  inputList.value = 'Mohamed Badr';
  const myTasks = [];

  test('Add two new tasks to the list', () => {
    addTask(myTasks);
    addTask(myTasks);
    expect(myTasks).toHaveLength(2);
  });

  test('Check description of first task', () => {
    expect(myTasks[0].description).toBe('Mohamed Badr');
  });

  test('Check status of first task', () => {
    expect(myTasks[0].completed).toBe(false);
  });

  test('Check index of second task', () => {
    expect(myTasks[1].index).toBe(2);
  });
});

describe('deleting a task from the list', () => {
  const myTasks = [
    {
      description: 'Study Jest',
      completed: false,
      index: 1,
    },

    {
      description: 'Submit Jest Project',
      completed: false,
      index: 2,
    },

    {
      description: 'Get Some Sleep',
      completed: false,
      index: 3,
    },

    {
      description: 'Meet Standup Team',
      completed: false,
      index: 4,
    },

  ];

  test('Delete task with index 2', () => {
    deleteTask(myTasks, 2);
    expect((myTasks)).toHaveLength(3);
  });

  test('Update index after task deletion', () => {
    expect(myTasks[2].index).toBe(3);
  });
});
