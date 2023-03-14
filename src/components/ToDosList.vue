<template>
  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      class="my-2 flex cursor-pointer items-center rounded-2xl bg-white/80 px-3 py-1"
      @click="$emit('taskDoneEv', index)"
    >
      <StatusClear class="mr-2 h-[20px] w-[20px]" />
      {{ todo }}
    </li>
  </ul>
</template>

<script setup>
import StatusClear from "@/Icons/StatusClear.vue";

defineEmits("taskDoneEv");
defineProps({
  todos: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
