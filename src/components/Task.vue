<template>
  <li
    :class="{ hide: task.hidden }"
    @mouseenter="showDeleteButton = !showDeleteButton"
    @mouseleave="showDeleteButton = !showDeleteButton">
    <input
      type="checkbox"
      v-model="task.done"
      @change="filterUpdate"
      @mouseup="$parent.save"/>
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
    <button @click="deleteTask" v-show="showDeleteButton">delete</button>
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
      showDeleteButton: false,
    }
  },

  methods: {
    filterUpdate() {
      if (this.task.done && this.$parent.filterValue == 'unfinished') this.$parent.filter('unfinished');

      if (!this.task.done && this.$parent.filterValue == 'completed') this.$parent.filter('completed');
    },

    edit() {
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

  computed: {
    editedTaskText() {
      return this.task.text;
    },
  },
}
</script>
