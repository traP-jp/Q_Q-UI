<template>
  <page-container>
    <div class="hero-container">
      <img src="/ogp.png" alt="logo" class="hero-image" />
    </div>
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
  } else if (searchQuery.value === '') {
    router.push({ path: '/' })
  }
})
</script>

<style scoped>
.recommend {
  padding-bottom: 30px;
}
.hero-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.hero-image {
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 50px auto;
  margin-bottom: 0px;
}
</style>
