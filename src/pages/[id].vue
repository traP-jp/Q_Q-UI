<template>
  <div>
    <p>ここに質問の詳細</p>
    <p>{{ questionId }}</p>
    <test-contest />
  </div>
</template>

<script setup lang="ts">
import { useParam } from '/@/use/param'
import TestContest from '/@/components/Markdown/TestContent.vue'
const questionId = useParam('id')
</script>

<style scoped></style>
