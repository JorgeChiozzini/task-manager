<template>
  <div class="task-home">
    <h1>Task Manager</h1>
    <TaskForm @add="addTask" />
    <TaskList
      :tasks="tasks"
      @toggle="toggleTask"
      @edit="editTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';

export default {
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(taskName) {
      this.tasks.push({
        id: Date.now(),
        name: taskName,
        completed: false,
      });
    },
    toggleTask(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        const newTaskName = prompt('Edit task name:', task.name);
        if (newTaskName) {
          task.name = newTaskName;
        }
      }
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(t => t.id !== taskId);
    },
  },
};
</script>

<style scoped>
.task-home {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
