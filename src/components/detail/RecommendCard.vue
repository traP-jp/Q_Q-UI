<template>
  <div>
    <p>関連する質問</p>
    <div>
      <a
        v-for="recommend in limitedRecommends"
        :key="recommend.id"
        :href="`/${recommend.id}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ recommend.content }}
      </a>
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

<style scoped></style>
