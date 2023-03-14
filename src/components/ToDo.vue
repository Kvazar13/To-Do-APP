<template>
  <div
    class="flex min-h-screen w-full justify-center bg-gradient-to-tr from-red-200 to-indigo-200 py-40"
  >
    <div
      class="h-fit min-h-[200px] w-[340px] rounded-2xl bg-white/70 p-5 backdrop-blur"
    >
      <ToDoInput @todo-created="(value) => todos.push(value)" />
      <div class="mt-3">
        <ToDosList
          :todos="todos"
          class="mb-3"
          @task-done-ev="(index) => taskDone(index)"
        />
        <DoneToDosList :done-todos="doneTodos" class="px-3" />
      </div>
    </div>
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
