<template>
  <form @submit.stop.prevent="submit">
    <input
      v-model="input"
      class="focus:shadow-outline w-full appearance-none rounded-2xl border py-2 px-4 leading-tight text-gray-700 shadow focus:outline-none"
      placeholder="What do you need to do?"
      type="text"
    />
  </form>
</template>
<script setup>
import { ref } from "vue";

const input = ref("");
const emit = defineEmits(["todoCreated"]);

function submit() {
  if (!input.value) return true;
  emit("todoCreated", input.value);
  input.value = "";
}
</script>
