<template>
  <div>
    <ToDoInput @todo-created="(value) => todos.push(value)" />
    <ul v-for="(doneTodo, index) in doneTodos" :key="index">
      <li class="line-through bg-blend-color">
        {{ doneTodo }}
      </li>
    </ul>
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

const todos = ref([]);
const doneTodos = ref([]);

function taskDone(index) {
  doneTodos.value.push(todos.value[index]);
  todos.value.splice(index, 1);
}
</script>
