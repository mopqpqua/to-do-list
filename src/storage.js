export default Storage = {
	TODO_KEY: 'todo',
	box: {}, // Reflection of the current tasks.
  todoList: document.querySelector('.todoList'),

  // Updates the box and localStorage
  // every time todo list changes.
  save() {
  	this.box = {};
  	this.update(this.todoList).forEach((task, index) => {
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
    	this.todoList.append(document.createElement('li'));

      let label = document.createElement('label');
      label.className = '';
      label.textContent = this.box[task].text;

      this.todoList.lastChild.append(label);

      let input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = this.box[task].state;

      this.todoList.lastChild.prepend(input);

      this.todoList.lastChild.firstChild.checked ?
      this.todoList.lastChild.classList.add('done') :
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
