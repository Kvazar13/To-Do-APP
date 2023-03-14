<template>
  <div>
    <ToDoInput @todo-created="(value) => todos.push(value)" />
    <DoneToDosList :done-todos="doneTodos" />
    <ToDosList :todos="todos" @task-done-ev="(index) => taskDone(index)" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import ToDoInput from "@/components/ToDoInput.vue";
import DoneToDosList from "@/components/DoneToDosList.vue";
import ToDosList from "@/components/ToDosList.vue";

const todos = ref([]);
const doneTodos = ref([]);

function taskDone(index) {
  doneTodos.value.push(todos.value[index]);
  todos.value.splice(index, 1);
}
</script>
