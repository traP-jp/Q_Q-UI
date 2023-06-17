<template>
  <page-container>
    <p class="main-title">{{ sampleQuestionDetails.question.content }}</p>
    <div>
      <question-message :question="sampleQuestionDetails.question" />
      <answer-message
        v-for="answer in sampleQuestionDetails.answers"
        :key="answer.id"
        :answer="answer"
      />
      <recommend-card :recommends="sampleQuestions" />
    </div>
  </page-container>
</template>

<script setup lang="ts">
import PageContainer from '/@/components/PageContainer.vue'
import { sampleQuestionDetails, sampleQuestions } from '/@/apis/question.sample'
import RecommendCard from '/@/components/detail/RecommendCard.vue'
import AnswerMessage from '/@/components/detail/AnswerMessage.vue'
import QuestionMessage from '/@/components/detail/QuestionMessage.vue'

import { useParam } from '/@/use/param'
const questionId = useParam('id')
</script>

<style scoped>
.main-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
</style>
