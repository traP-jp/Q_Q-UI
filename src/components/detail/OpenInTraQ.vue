<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="link">
    <p>traQで開く</p>
    <icon icon="ic:outline-open-in-new" class="icon" />
  </a>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = defineProps<{
  id: string
}>()

const url = computed(() => `https://q.trap.jp/messages/${props.id}`)
</script>

<style scoped>
.link {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  transition: background-color 0.2s ease-in-out;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
