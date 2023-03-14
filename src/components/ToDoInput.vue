<template>
  <form @submit.stop.prevent="submit">
    <input v-model="input" type="text" />
  </form>
</template>
<script setup>
import { ref } from "vue";

const input = ref("");
const emit = defineEmits(["todoCreated"]);

function submit() {
  emit("todoCreated", input.value);
  input.value = "";
}
</script>
