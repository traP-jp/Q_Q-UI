<template>
  <div @click="onClick">
    <markdown-content :content="content" />
  </div>
</template>

<script lang="ts" setup>
import MarkdownContent from './MarkdownContent.vue'
import { useMarkdownInternalHandler } from './useMarkdownInternalHandler'

import { render } from '/@/lib/markdown/markdown'
const rendered = await render('!!hogehoge!!')
const content = rendered.renderedText

const { onClick } = useMarkdownInternalHandler()
</script>
