
import 'lodash';
import './style.css';
import status from './status.js';

const mainList = document.getElementById('main-list');

let myTasks = [{
  description: 'Understand JavaScript ES6',
  completed: false,
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

