<template>
  <ul v-for="(doneTodo, index) in doneTodos" :key="index">
    <li class="line-through bg-blend-color">
      {{ doneTodo }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  doneTodos: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
