<template>
  <page-container>
    <search-button />
    <h2 class="recommend">よくある質問</h2>
    <frequently-asked />
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '/@/components/PageContainer.vue'
import SearchButton from '/@/components/SearchButton.vue'
import FrequentlyAsked from '/@/components/FrequentlyAsked.vue'
</script>

<style scoped>
.recommend {
  padding-bottom: 30px;
}
</style>
