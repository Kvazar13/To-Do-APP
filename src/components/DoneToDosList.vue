<template>
  <ul>
    <li
      v-for="(doneTodo, index) in doneTodos"
      :key="index"
      class="line-through bg-blend-color"
    >
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
