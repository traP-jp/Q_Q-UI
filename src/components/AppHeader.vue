<template>
  <div class="container">
    <header class="header">
      <p class="title">Q_Q</p>
      <header-search-input v-model="query" placeholder="Q&Aを探す" />
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderSearchInput from './HeaderSearchInput.vue'

const query = ref('')
</script>

<style scoped>
.container {
  width: 100%;
  height: 64px;
}

.header {
  display: grid;
  grid-template-columns: 5fr 3fr;
  align-items: center;
  height: 64px;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 0 16px;
}

.title {
  font-size: 24px;
  margin: 0;
  font-weight: bold;
  color: #262626;
}
</style>
