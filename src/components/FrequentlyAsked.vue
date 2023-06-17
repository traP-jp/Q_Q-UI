<script setup lang="ts">
import { sampleQuestions } from '/@/apis/question.sample.ts'
</script>

<template>
  <div v-for="details in sampleQuestions" :key="details.name">
    <div class="question">
      <div class="content">{{ details.content }}</div>
      <div class="grid-container">
        <div class="createdAt">{{ details.createdAt }}</div>
        <div class="responseNum">💭{{ details.responseNum }}</div>
        <div class="tagsarea">
          <div v-for="tags1 in details.tags" :key="tags1">
            <div class="tags">#{{ tags1 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question {
  border-top: solid 1px #d9d9d9;
}

.grid-container {
  font-size: 14px;
  display: flex;
  align-items: center;
  max-width: 712px;
  max-height: 32px;
}

.content {
  font-size: 16px;
  color: #000000;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.createdAt {
  font-size: 1rem;
  color: #919191;
  white-space: nowrap;
  padding-top: 3px;
  padding-bottom: 4px;
  padding-left: 20px;
}

.responseNum {
  font-size: 1rem;
  color: #919191;
  white-space: nowrap;
  padding-bottom: 5px;
  padding-left: 10px;
}

.tagsarea {
  white-space: nowrap;
  display: flex;
  overflow: hidden;
}
.tags {
  font-size: 1rem;
  color: #919191;
  padding-bottom: 5px;
  padding-left: 30px;
  overflow: hidden;
}
</style>
