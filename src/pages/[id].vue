<template>
  <page-container>
    <p>ここに質問の詳細</p>
    <p>{{ questionId }}</p>
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '/@/components/PageContainer.vue'
import { useParam } from '/@/use/param'
const questionId = useParam('id')
</script>

<style scoped></style>
