<!-- eslint-disable vue/no-v-html -->
<template>
  <span
    ref="contentRef"
    class="markdown-body"
    :class="$style.content"
    v-html="content"
  />
</template>

<script lang="ts" setup>
defineProps<{
  content: string
}>()
</script>

<style module>
.content {
  word-break: normal;
  overflow-wrap: break-word;
  overflow-wrap: anywhere;
  line-break: loose;
}
</style>
