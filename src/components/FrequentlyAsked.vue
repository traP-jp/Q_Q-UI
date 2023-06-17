<script setup lang="ts">
import { sampleQuestions } from '/@/apis/question.sample.ts'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div>
    <div v-for="details in sampleQuestions" :key="details.id" class="question">
      <p class="content">{{ details.content }}</p>
      <div class="subcontent">
        <p class="createdAt">{{ details.createdAt }}</p>
        <div class="response-num">
          <icon icon="ic:outline-mode-comment" class="icon" />
          <p>{{ details.responseNum }}</p>
        </div>
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

.subcontent {
  font-size: 0.875rem;
  display: flex;
  gap: 6px;
  align-items: center;
  width: 100%;
}

.icon {
  width: 16px;
  height: 16px;
}

.content {
  color: #000000;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.createdAt {
  color: #919191;
  white-space: nowrap;
  padding-top: 3px;
  padding-bottom: 4px;
  padding-left: 20px;
}

.response-num {
  display: flex;
  align-items: center;
  gap: 2px;
  color: #919191;
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
