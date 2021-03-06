<template>
  <div id="todos">
    <header>
      <h1>todos</h1>
      <input
        placeholder="What needs to be done?"
        autofocus
        autocomplete="off"
        class="newTodo"
        @keyup.enter="addTask"
        v-model.lazy="newTask"
      />
    </header>

    <footer>
      <section class="filters">
        <button @click="filter('completed')">Completed</button>
        <button @click="filter('unfinished')">Unfinished</button>
        <button @click="filter('all')">All</button>
      </section>
    </footer>

    <section class="main">
      <ul class="todoList">
        <Task
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          :tasks="tasks"
          :task-index="index"></Task>
      </ul>
    </section>

    <article class="info">
      <p>Double-click on text to edit</p>
      <p>Written by Slava Rykov</p>
    </article>
  </div>
</template>

<style>
@import 'fonts.css';

html, body {
  margin: 0;
  padding: 0;

  background-color: #F7F7F7;
}

.done {
  color: #A3A3A3;
  text-decoration: line-through solid #444444;
}

.hide {
  display: none;
}

#todos {
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
}

#todos header, section, footer {
  width: 70%;
  margin: 0 auto;
}

/* HEADER */
header h1 {
  text-align: center;
  font-family: Roboto, serif, 'Times New Roman';
  font-size: 7em;
  font-weight: 300;

  margin: 0;
}

.newTodo {
  font-family: Jost, sans-serif, Arial;
  font-size: 1.5em;
  width: 100%;
  padding: 20px 5%;

  /* aligns input width to
  width of the block */
  box-sizing: border-box;

  border: none;
  box-shadow: 3px 3px 4px #C6C6C6;
}

.newTodo:focus {
  outline: none;
}

/* MAIN */
.main {
  font-family: Jost, sans-serif, Arial;
  font-size: 1.5em;
  margin-top: 20px;
}

.todoList {
  list-style-type: none;
  padding-inline-start: 0;
}

.todoList li {
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid #C7C7C7;

  overflow: hidden;
  text-overflow: ellipsis;
}

.todoList label {
  padding-left: 40px;
}

/* custom checkboxes */
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  /* if the property "appearance"
  isn`t supported the styles won`t apply
  and default input style will be shown */
  input[type='checkbox'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    cursor: pointer;
  }

  input[type='checkbox']:not(:checked)::after {
    content: '';
    position: absolute;
    top: -15px;

    width: 23px;
    height: 23px;

    border: 1px solid #C7C7C7;
    border-radius: 100%;
  }

  input[type='checkbox']:checked::after {
    content: '';
    position: absolute;
    top: -15px;

    width: 25px;
    height: 25px;

    background-color: #A9DFBF ;
    border-radius: 100%;
  }
}

/* custom delete button */
.todoList button {
  /* reset default settings */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border: 1px solid #C7C7C7;
  border-radius: 15px;

  float: right;
  min-width: 70px;
  height: 35px;

  font-size: 17px;
  font-family: Jost, sans-serif, Arial;

  opacity: 0.5;
  transition: opacity 0.15s;
}

.todoList button:hover {
  opacity: 1;
}

.todoList button:focus {
  outline: none;
}

.todoList button:active {
  box-shadow: 1px 1px 2px #C6C6C6 inset;
}

/* text input when editing */
.todoList input[type="text"] {
  font-family: Jost, sans-serif, Arial;
  font-size: 0.8em;

  width: 65%;
  padding: 0 5px;
  margin-left: 40px;
}

.todoList input[type="text"]:focus {
  outline: none;
}

/* FOOTER */

footer {
  height: 40px;
  margin-top: 20px;
  text-align: center;
}

.filters {
  width: 50%;
  float: right;
  display: flex;
  justify-content: flex-end;
}

.filters button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;

  height: 40px;

  border-bottom: 1px solid #C7C7C7;
  border-right: 1px solid #C7C7C7;
  background-color: white;

  font-size: 13px;
  font-family: Jost, sans-serif, Arial;
}

.filters button:focus {
  outline: none;
}

.filters button:active {
  box-shadow: 1px 1px 2px #C6C6C6 inset;
}

/* INFO */
.info {
  width: 50%;
  margin: 130px auto 0;
  text-align: center;

  font-size: 0.8em;
  font-family: Jost, sans-serif, Arial;
}

</style>

<script>
import Task from '@components/Task';

export default {
  name: 'Todos',

  components: {
    Task
  },

  data() {
    return {
      STORAGE_KEY: 'TODO_LIST',

      tasks: this.fetch(),
      newTask: '',
      filterValue: 'all',
    };
  },

  beforeCreate() {
    this.STORAGE_KEY = 'TODO_LIST';
  },

  mounted() {
    this.filter('all');
  },

  updated() {
    this.filter(this.filterValue);
  },

  methods: {
    // Task adding
    addTask() {
      this.tasks.push({
        text: this.newTask,
        done: false,
        hidden: false,
      });

      this.newTask = '';

      this.save();
    },

    // Filters
    filter(value) {
      this.filterValue = value;

      switch (value) {
        case 'completed': {
          this.tasks.forEach(task => {
            if (!task.done) task.hidden = true;
            else task.hidden = false;
          });

          break;
        }

        case 'unfinished': {
          this.tasks.forEach(task => {
            if (task.done) task.hidden = true;
            else task.hidden = false;
          });

          break;
        }

        case 'all': {
          this.tasks.forEach(task => {
            task.hidden = false;
          });

          break;
        }
      }
    },

    // Local storage handling
    // using JSON
    save() {
      let jsonTasks = JSON.stringify(this.tasks);
      window.localStorage.setItem(this.STORAGE_KEY, jsonTasks);
    },

    fetch() {
      let tasks = JSON.parse(
        window.localStorage.getItem(this.STORAGE_KEY) || "[]"
      );

      return tasks;
    },
  },
}
</script>
