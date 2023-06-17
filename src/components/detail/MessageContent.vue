<template>
  <p>{{ content }}</p>
</template>

<script setup lang="ts">
interface Props {
  content: string
}

defineProps<Props>()
</script>

<style scoped></style>
