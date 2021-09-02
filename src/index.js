
import 'lodash';
import './style.css';
import status from './status.js';

const mainList = document.getElementById('main-list');

let myTasks = [{
  description: 'Understand JavaScript ES6',
  completed: true,
  index: 0,
},
{
  description: 'Work on my social media',
  completed: false,
  index: 1,
},
{
  description: 'Complete To Do List project',
  completed: false,
  index: 2,
}];

const saveToStorage = (taskArray) => {
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

const displayTasks = () => {
  for (let i = 0; i < myTasks.length; i += 1) {
    const content = `<div class="list-input"><input type="checkbox"> <p>${myTasks[i].description}</p></div><span><i class="fas fa-ellipsis-v"></i></span>`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `${content}`;
    listItem.className = 'list-item';
    mainList.appendChild(listItem);

    const listInput = listItem.firstChild;
    const checkbox = listInput.firstChild;

    if (myTasks[i].completed) {
      checkbox.classList.add('checked');
      checkbox.checked = true;
      checkbox.addEventListener('change', (e) => {
        status(e, myTasks[i]);
        saveToStorage(myTasks);
      });
    } else {
      checkbox.classList.add('unchecked');
      checkbox.addEventListener('change', (e) => {
        status(e, myTasks[i]);
        saveToStorage(myTasks);
      });
    }
  }
}

const getFromStorage = () => {
  const local = localStorage.getItem('tasks');
  if (local) {
    myTasks = JSON.parse(local);
    displayTasks();
  } else {
    displayTasks();
  }
}

window.onload = getFromStorage();
