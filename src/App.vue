<template>
  <div class="container">
    <app-header-vue />
    <main>
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <loading />
        </template>
      </Suspense>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeaderVue from './components/AppHeader.vue'
</script>

<style scoped>
.container {
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr;
}
</style>
