<template>
  <markdown-content :content="content" />
</template>

<script lang="ts" setup>
import MarkdownContent from './MarkdownContent.vue'

import { render } from '/@/lib/markdown/markdown'
const rendered = await render('!!hogehoge!!')
const content = rendered.renderedText
</script>
