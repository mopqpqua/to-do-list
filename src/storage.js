'use strict';

const storage = {
	TODO_KEY: 'todo',
	box: {}, // Reflection of the current tasks.

  // Updates the box and localStorage
  // every time todo list changes.
  save() {
  	this.box = {};
  	this.update(todoList).forEach((task, index) => {
    	this.box[index + 1] = {};
    	this.box[index + 1].text = task.text;
      this.box[index + 1].state = task.state;
    });

    let STORAGE = JSON.stringify(this.box);

    window.localStorage.setItem(this.TODO_KEY, STORAGE);
  },

  fetch(key) {
  	if (!window.localStorage.length) return;

    this.box = JSON.parse( window.localStorage.getItem(key) );

    for ( let task in this.box ) {
    	todoList.append(makeTodoLi());
      todoList.lastChild.append( makeLabel(this.box[task].text) );
      todoList.lastChild.prepend( makeInput('checkbox', this.box[task].state) );

      todoList.lastChild.firstChild.checked ?
      todoList.lastChild.classList.add('done') :
      null;
    }
  },

  // Makes an array of object presentations
  // of current tasks.
  update(current) {
  	let arrOfTasks = [];

    for (let item of current.children) {
    	let task = {};
      let label = item.querySelector('label');
      task.text = label.textContent;
      task.state = item.classList.contains('done');

      arrOfTasks.push(task);
    }
    return arrOfTasks
  },
};
