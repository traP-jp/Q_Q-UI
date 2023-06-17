<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <p>traQで開く</p>
    <img />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
}>()

const url = computed(() => `https://q.trap.jp/messages/${props.id}`)
</script>

<style scoped></style>
