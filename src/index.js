import 'lodash';
import './style.css';

const todoList = document.getElementById('todo-list');

const myTasks = [{
  description: 'Understand JavaScript ES6',
  completed: true,
  index: 0,
},
{
  description: 'Work on my social media',
  completed: true,
  index: 1,
},
{
  description: 'Complete To Do List project',
  completed: false,
  index: 2,
}];

function displayTasks() {
  let content = '';
  for (let i = 0; i < myTasks.length; i += 1) {
    content = `${myTasks[i].description}`;

    const listItem = document.createElement('li');
    listItem.innerText = content;
    listItem.className = 'list-item';
    todoList.appendChild(listItem);
  }
}

window.addEventListener('load', () => {
  displayTasks();
});

