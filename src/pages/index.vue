<template>
  <page-container>
    <search-button />
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

body {
  font-family: 'Noto Sans JP', sans-serif;
}

h2 {
  padding-bottom: 30px;
}
</style>
