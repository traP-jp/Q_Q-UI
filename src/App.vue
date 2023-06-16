<template>
  <div>
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

const $html = document.documentElement
$html.dataset['codeHighlight'] = 'light'
</script>

<style scoped></style>
