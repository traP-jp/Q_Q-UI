<template>
  <div class="wrapper">
    <header class="header">
      <router-link to="/"><img src="/@/assets/Q_Q.png" alt="icon" class="icon" /></router-link>
      <p class="title">Q_Q</p>
      <header-search-input v-model="query" placeholder="Q&Aを探す" />
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderSearchInput from './HeaderSearchInput.vue'
import { RouterLink } from 'vue-router';

const query = ref('')
</script>

<style scoped>
.wrapper {
  position: fixed;
  background-color: white;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #dcdedf;
}

.header {
  display: grid;
  grid-template-columns: 0.5fr 5fr 3fr;
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

.icon{
  height: 35px;
  width: auto;
}
</style>
