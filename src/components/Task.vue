<template>
  <li>
    <input type="checkbox"/>
    <label
      v-show="!editTask"
      @dblclick="edit">{{ task.text }}</label>
    <input
      type="text"
      v-show="editTask"
      v-model.lazy="editedTaskText"
      @keyup.esc="cancelEdit"
      @keyup.enter="applyEdit"
      @blur="applyEdit"/>
    <button @click="deleteTask">delete</button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object,
    tasks: Array,
    taskIndex: Number,
  },

  data() {
    return {
      editTask: false,
      editedTaskText: this.task.text,
    }
  },

  methods: {
    edit() {
      this.editTask = true;
    },

    cancelEdit() {
      this.editTask = false;
      this.editedTaskText = this.task.text;
    },

    applyEdit() {
      this.task.text = this.editedTaskText;
      this.editTask = false;
    },

    deleteTask() {
      this.tasks.splice(this.taskIndex, 1);
    },
  },
}
</script>
