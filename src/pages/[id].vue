<template>
  <page-container>
    <p class="main-title">
      {{ pageTitle }}
    </p>
    <div v-if="questionDetail" class="card-container">
      <question-message :question="questionDetail.question" />
      <answer-message
        v-for="answer in questionDetail.answers"
        :key="answer.id"
        :answer="answer"
      />
      <recommend-card :recommends="sampleQuestions" />
    </div>
    <div v-else-if="error">
      <p>エラーが発生しました</p>
      <p>{{ error }}</p>
    </div>
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '/@/components/PageContainer.vue'
import { sampleQuestions } from '/@/apis/question.sample'
import RecommendCard from '/@/components/detail/RecommendCard.vue'
import AnswerMessage from '/@/components/detail/AnswerMessage.vue'
import QuestionMessage from '/@/components/detail/QuestionMessage.vue'
import { generateTitle } from '/@/libs/generateTitle'

import { useParam } from '/@/use/param'
import { useQuestion } from '/@/apis/question'
import { computed, watchEffect } from 'vue'
const id = useParam('id')

const { question: questionDetail, questionId, error } = useQuestion()
watchEffect(() => {
  questionId.value = id.value
})

const pageTitle = computed(() => {
  if (questionDetail === undefined || questionDetail.value === undefined)
    return '読み込み中...'
  return generateTitle(questionDetail.value.question.content)
})
</script>

<style scoped>
.main-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
