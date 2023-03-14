<template>
  <div>
    <ToDoInput @todo-created="(value) => todos.push(value)" />
    <DoneToDosList :done-todos="doneTodos" />
    <hr />
    <ul v-for="(todo, index) in todos" :key="index">
      <li @click="taskDone(index)">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ToDoInput from "@/components/ToDoInput.vue";
import DoneToDosList from "@/components/DoneToDosList.vue";

const todos = ref([]);
const doneTodos = ref([]);

function taskDone(index) {
  doneTodos.value.push(todos.value[index]);
  todos.value.splice(index, 1);
}
</script>
