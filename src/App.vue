<template>
  <div class="container">
    <app-header-vue />
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <loading />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import AppHeaderVue from './components/AppHeader.vue'

// for code highlight (markdown)
const $html = document.documentElement
$html.dataset['codeHighlight'] = 'light'
</script>

<style scoped>
.container {
  position: relative;
  height: 100%;
  padding-top: 64px;
  padding-bottom: 32px;
}
</style>
