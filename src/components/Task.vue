<template>
  <li
    :class="{ hide: task.hidden }"
    @mouseenter.self="deleteButton = !deleteButton"
    @mouseleave.self="deleteButton = !deleteButton">
    <input
      type="checkbox"
      v-model="task.done"
      @change="tasksUpdate"/>
    <label
      v-show="!editTask"
      @dblclick="edit"
      :class="{ done: task.done }">{{ task.text }}</label>
    <input
      type="text"
      ref="editor"
      v-show="editTask"
      v-model="editedTaskText"
      @keyup.esc="cancelEdit"
      @keyup.enter="applyEdit"
      @blur="applyEdit"/>
    <button @click="deleteTask" v-show="deleteButton">delete</button>
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
      deleteButton: false,
    }
  },

  methods: {
    tasksUpdate() {
      if (this.task.done && this.$parent.filterValue == 'unfinished') this.$parent.filter('unfinished');

      if (!this.task.done && this.$parent.filterValue == 'completed') this.$parent.filter('completed');

      this.$parent.save();
    },

    edit() {
      this.editedTaskText = this.task.text;
      this.editTask = true;
      // Wait until the
      // input is rerendered
      this.$nextTick(() => {
        this.$refs.editor.focus();
      });
    },

    cancelEdit() {
      this.editTask = false;
      this.editedTaskText = this.task.text;
    },

    applyEdit() {
      this.editTask = false;
      this.task.text = this.editedTaskText;

      // Local storage saving
      this.$parent.save();
    },

    deleteTask() {
      this.tasks.splice(this.taskIndex, 1);

      // Local storage saving
      this.$parent.save();
    },
  },
}
</script>
