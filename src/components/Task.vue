<template>
  <li>
    <input type="checkbox"/>
    <label
      v-if="!editTask"
      @dblclick="edit">{{ task.text }}</label>
    <input
      type="text"
      v-if="editTask"
      v-model.lazy="editedTask"
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
      editedTask: this.task.text,
    }
  },

  methods: {
    edit() {
      this.editTask = true;
    },

    cancelEdit() {
      this.editTask = false;
      this.editedTask = '';
    },

    applyEdit() {
      this.task.text = this.editedTask;
      this.editTask = false;
    },

    deleteTask() {
      this.tasks.splice(this.taskIndex, 1);
    },
  },
}
</script>
