<template>
  <div class="task-list">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="toggleTask"
      @edit="editTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem,
  },
  props: {
    tasks: Array,
  },
  methods: {
    toggleTask(taskId) {
      this.$emit('toggle', taskId);
    },
    editTask(taskId) {
      this.$emit('edit', taskId);
    },
    deleteTask(taskId) {
      this.$emit('delete', taskId);
    },
  },
};
</script>

<style scoped>
.task-list {
  margin-top: 20px;
}
</style>
