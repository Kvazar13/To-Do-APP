<template>
  <ul>
    <li
      v-for="(todo, index) in todos"
      :key="index"
      @click="$emit('taskDoneEv', index)"
    >
      {{ todo }}
    </li>
  </ul>
</template>

<script setup>
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
