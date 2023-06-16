<template>
  <div>
    <p>ここに質問の詳細</p>
    <p>{{ questionId }}</p>
  </div>
</template>

<script setup lang="ts">
import { useParam } from '/@/use/param'
const questionId = useParam('id')
</script>

<style scoped></style>
