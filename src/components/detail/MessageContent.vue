<template>
  <div class="message" @click="onClick">
    <markdown-content :content="renderedText" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  content: string
}

const props = defineProps<Props>()

import MarkdownContent from '/@/components/Markdown/MarkdownContent.vue'
import { useMarkdownInternalHandler } from '/@/components/Markdown/useMarkdownInternalHandler'

import { render } from '/@/libs/markdown/markdown'
const rendered = await render(props.content)
const renderedText = rendered.renderedText

const { onClick } = useMarkdownInternalHandler()
</script>

<style scoped>
.message {
  padding: 16px;
}
</style>
