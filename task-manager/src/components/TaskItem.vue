<template>
  <div class="task-item">
    <input type="checkbox" :checked="task.completed" @change="toggleTask" />
    <span :class="{ completed: task.completed }">{{ task.name }}</span>
    <button @click="editTask">Edit</button>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  methods: {
    toggleTask() {
      this.$emit('toggle', this.task.id);
    },
    editTask() {
      this.$emit('edit', this.task.id);
    },
    deleteTask() {
      this.$emit('delete', this.task.id);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
