<template>
  <div>
    <form @submit="submit">
      <input v-model="input" type="text" />
    </form>
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

const input = ref("");
const todos = ref([]);
const doneTodos = ref([]);

function submit(ev) {
  ev.preventDefault();
  ev.stopPropagation();
  todos.value.push(input.value);
  input.value = "";
}

function taskDone(index) {
  doneTodos.value.push(todos.value[index]);
  todos.value.splice(index, 1);
}
</script>
