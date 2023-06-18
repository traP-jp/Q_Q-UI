<template>
  <page-container>
    <search-button v-model="searchQuery" placeholder="検索" />
    <h2 class="recommend">よくある質問</h2>
    <frequently-asked v-if="questions" :questions="questions" />
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '/@/components/PageContainer.vue'
import SearchButton from '/@/components/SearchButton.vue'
import FrequentlyAsked from '/@/components/FrequentlyAsked.vue'
import { useRecommend } from '/@/apis/recommend'
import { ref, watchEffect } from 'vue'
import { useQuery } from '/@/use/query'
import { useRouter } from 'vue-router'

const router = useRouter()
const queryparams = useQuery('q')
const searchQuery = ref('')

const { query, questions } = useRecommend()
watchEffect(() => {
  query.value = queryparams.value ?? null
})

watchEffect(() => {
  // queryの入力がある場合は、URLを更新する
  // TODO: enterkeyとかで更新する
  if (searchQuery.value) {
    router.push({ path: '/', query: { q: searchQuery.value } })
  }
})
</script>

<style scoped>
.recommend {
  padding-bottom: 30px;
}
</style>
