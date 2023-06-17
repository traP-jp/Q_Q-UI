<template>
  <p class="message">{{ content }}</p>
</template>

<script setup lang="ts">
interface Props {
  content: string
}

defineProps<Props>()
</script>

<style scoped>
.message {
  padding: 16px;
}
</style>
