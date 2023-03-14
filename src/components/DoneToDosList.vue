<template>
  <div>
    <ul>
      <li
        v-for="(doneTodo, index) in doneTodos"
        :key="index"
        class="flex items-center text-neutral-400 line-through bg-blend-color"
      >
        <StatusChecked class="mr-2 h-[20px] w-[20px]" />
        {{ doneTodo }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import StatusChecked from "@/Icons/StatusChecked.vue";

defineProps({
  doneTodos: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
