import storage from './storage.js';
import './style.css';

'use strict';

const newTodo = document.querySelector('.newTodo');
const todoList = document.querySelector('.todoList');
const filterBtns = document.querySelectorAll('footer .filters button');

// Filters realization:

// The object that controls
// how filters works.
const filters = {
  all(list) {
    Array.from(list).forEach((item) => item.classList.remove('hide'));
  },

  unfinished(list) {
    Array.from(list).forEach((item) => {
      !item.classList.contains('done') ?
      item.classList.remove('hide') :
      item.classList.add('hide');
    })
  },

  completed(list) {
    Array.from(list).forEach((item) => {
      item.classList.contains('done') ?
      item.classList.remove('hide') :
      item.classList.add('hide');
    })
  },

  isHidden() { // Adjusts visibility of the filter buttons.
    todoList.children.length == 0 ?
    document.querySelector('.filters').classList.add('hide') :
    document.querySelector('.filters').classList.remove('hide')
  },
};

for (let btn of filterBtns) {
  switch (btn.value) {
    case 'all':
      btn.onclick = filters.all.bind(null, todoList.children);
      break;
    case 'unfinished':
      btn.onclick = filters.unfinished.bind(null, todoList.children);
      break;
    case 'completed':
      btn.onclick = filters.completed.bind(null, todoList.children);
      break;
  }
};

// "Task" component:
// Functions that creates
// separate parts of an "Task" component.

// li part:
function makeTodoLi() {
  return document.createElement('li');
}

// label part:
function makeLabel(text) {
  let label = document.createElement('label');
  label.className = '';
  label.textContent = text;

  return label;
}

// input part:
function makeInput(type, state) {
  let input = document.createElement('input');
  input.type = type;
  input.checked = state; // Means "Task" state (true(done) or false(undone)).

  return input;
}

// Function that assemble the "Task" component
// and put it into the task list.
// The final node looks like:
// <li>
//  <input type="checkbox"/><label>Text</label>
// </li>
function addTodo() {
  if (newTodo.value) {
    todoList.append(makeTodoLi());
    todoList.lastChild.append(makeLabel(newTodo.value));
    todoList.lastChild.prepend(makeInput('checkbox', false));
  }

  filters.isHidden();
  newTodo.value = '';
  storage.save();
}

newTodo.onkeyup = function(event) {
  if (event.code == 'Enter') addTodo();
};

// Function that changes the "Task" state (done or undone).
// Tied to the task list.
todoList.addEventListener('click', function(event) {
  if (event.target.tagName == 'INPUT') {
    let inp = event.target;

    inp.checked ? inp.parentNode.classList = 'done' :
    inp.parentNode.classList = '';

    storage.save();
  }
});

// This listener create the
// "delete" button to the right of
// "Task" label part (task text).
todoList.addEventListener('mouseover', function(event) {
  let li = event.target;

  if ( li.tagName == 'LI' && !(li.children.length > 2) ) {
    let btn = document.createElement('button');
    btn.textContent = 'delete';

    btn.onclick = function() {
      li.remove();
      filters.isHidden();
      storage.save();
    };

    li.append(btn);

    li.onmouseleave = function() {
      li.lastChild.remove();
      li.onmouseleave = null;
    };
  }
});

// Function that changes "Task" text.
function changeTodo(currentState) {
  this.textContent = this.previousSibling.value;
  this.previousSibling.replaceWith(makeInput('checkbox', currentState));
}

// That listeners allows to
// edit "Task" text in double-click.
todoList.addEventListener('dblclick', function(event) {
  let label = event.target;

  if (label.tagName == 'LABEL') {
    // label.previousSibling - checkbox input element
    let state = label.previousSibling.checked;
    label.previousSibling.replaceWith(makeInput('text', null));
    // now label.previousSibling is text input element
    let textInp = label.previousSibling;
    textInp.value = label.textContent;
    textInp.focus();

    label.textContent = '';

    // Applying changes with:
    textInp.onblur = function() {
      changeTodo.call(label, state);
      storage.save();
    } // blur...
    textInp.onkeyup = function(event) { // or "Enter" or "Escape" keybuttons.
      if (event.code == 'Enter' || event.code == 'Escape') textInp.blur();
    };
  }
});

storage.fetch(storage.TODO_KEY);
filters.isHidden();
