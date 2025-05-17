<script setup lang="ts">
const words = ["Trying to stay alive!", "Still Alive!", "Still Breathing!"];
const currentWord = ref("");

onMounted(() => {
  currentWord.value = words[Math.floor(Math.random() * words.length)]
});
</script>

<template>
  <div>
    {{ currentWord }}
  </div>
</template>