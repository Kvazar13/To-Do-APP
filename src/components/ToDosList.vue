<template>
  <ul v-for="(todo, index) in todos" :key="index">
    <li @click="$emit('taskDoneEv', index)">
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
