<template>
  <page-container
    ><search-button />
    <h2>よくある質問</h2>
    <frequently-asked></frequently-asked>
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '/@/components/PageContainer.vue'
import SearchButton from '/@/components/SearchButton.vue'
import FrequentlyAsked from '/@/components/FrequentlyAsked.vue'
</script>

<style scoped>
html {
  font-size: 16px;
}
h2{
  padding-bottom: 30px;
}
</style>
