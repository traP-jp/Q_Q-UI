<template>
  <div class="cardbox">
    <p class="title">関連する質問</p>
    <div class="link-container">
      <router-link
        v-for="recommend in limitedRecommends"
        :key="recommend.id"
        :to="`/${recommend.id}`"
        class="link"
      >
        {{ recommend.content }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Question } from '/@/apis/parser/question'

interface Props {
  recommends: Question[]
}
const props = defineProps<Props>()
const limitedRecommends = computed(() => props.recommends.slice(0, 3))
</script>

<style scoped>
.cardbox {
  border-radius: 8px;
  background-color: #fff;
  padding: 8px 0px;
  border: 1px solid #d9d9d9;
}
.title {
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  padding: 0px 16px;
  padding-bottom: 8px;
}
.link-container {
  padding: 8px 16px;
}
.link {
  display: block;
  line-height: 2rem;
}
</style>
