import './style.css';

import {
  setTask, editTask, deleteTask, clearCompleted, 
} from './tasks';

import completed from './completed';

const todoContainer = document.querySelector('.todo-lists');
const addTask = document.getElementById('add-todo');
const taskInput = document.getElementById('new-todo');
const clearComplete = document.getElementById('clear-todo');
let insertedTask;

let tasks;
if (localStorage.getItem('tasks') !== null) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
} else {
  tasks = [];
}


const generateTasks = () => {
  tasks.sort((a, b) => b.index - a.index);
  tasks.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'todo-li';
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'completed';
    checkbox.className = 'checkbox';
    
    const description = document.createElement('p');
    
    description.innerText = `${item.description}`;
    const removeIcon = document.createElement('button');
    removeIcon.className = 'del-todo';
    removeIcon.type = 'button';
    removeIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
    if (item.completed === true) {
      checkbox.checked = true;
      description.style.textDecoration = 'line-through';
    } else {
      checkbox.checked = false;
    }
    checkbox.addEventListener('change', (event) => {
      completed(item.index, item, event, description);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    description.addEventListener('click', () => {
      description.setAttribute('contenteditable', 'true');
      description.addEventListener('input', () => {
        item.description = description.innerText;
        editTask(item, tasks);
      });
    });
    li.addEventListener('mouseover', () => {
      removeIcon.style.display = 'block';
    });
    li.addEventListener('mouseleave', () => {
      removeIcon.style.display = 'none';
    });
    removeIcon.addEventListener('click', () => {
      deleteTask(item.index, tasks);
      window.location.reload();
    });
    div.appendChild(checkbox);
    div.appendChild(description);
    li.appendChild(div);
    li.appendChild(removeIcon);
    todoContainer.appendChild(li);
  });
};

window.addEventListener('load', generateTasks);
taskInput.addEventListener('input', (e) => {
  insertedTask = e.target.value;
});

addTask.addEventListener('click', () => {
  if (insertedTask) {
    const newTask = setTask(tasks, insertedTask);
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  } else {
    // eslint-disable-next-line no-alert
    alert('Add a new task');
  }
});

clearComplete.addEventListener('click', () => {
  clearCompleted(tasks);
  window.location.reload();
});
