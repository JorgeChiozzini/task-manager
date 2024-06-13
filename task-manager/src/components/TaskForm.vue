<template>
  <div class="task-form">
    <input type="text" v-model="taskName" placeholder="New Task" />
    <button @click="submitTask">Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: '',
    };
  },
  methods: {
    submitTask() {
      if (this.taskName.trim()) {
        this.$emit('add', this.taskName);
        this.taskName = '';
      }
    },
  },
};
</script>

<style scoped>
.task-form {
  display: flex;
  margin-top: 20px;
}
.task-form input {
  flex: 1;
  padding: 8px;
}
.task-form button {
  padding: 8px;
  margin-left: 10px;
}
</style>
