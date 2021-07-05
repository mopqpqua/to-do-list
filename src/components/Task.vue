<template>
  <li
    :class="{ hide: task.hidden }"
    @mouseenter="showDeleteButton = !showDeleteButton"
    @mouseleave="showDeleteButton = !showDeleteButton">
    <input type="checkbox" v-model="task.done" @click="$parent.save()"/>
    <label
      v-show="!editTask"
      @dblclick="edit"
      :class="{ done: task.done }">{{ task.text }}</label>
    <input
      type="text"
      ref="editor"
      v-show="editTask"
      v-model.lazy="editedTaskText"
      @keyup.esc="cancelEdit"
      @keyup.enter="applyEdit"
      @blur="applyEdit"/>
    <button @click="deleteTask" v-if="showDeleteButton">delete</button>
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

      editedTaskText: this.task.text,
    }
  },

  methods: {
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
      this.$parent.save()
    },

    deleteTask() {
      this.tasks.splice(this.taskIndex, 1);

      // Local storage saving
      this.$parent.save()
    },
  },
}
</script>
