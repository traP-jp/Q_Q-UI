<template>
  <div class="cardbox">
    <message-header v-if="user" :user="user" :date="question.updatedAt" />
    <message-content :content="question.content" />
    <div class="message-footer">
      <div class="toolbar">
        <div class="bars">
          <icon icon="ic:outline-mode-comment" class="icon" />
          <p>{{ question.responseNum }}</p>
        </div>
        <div class="bars">
          <icon icon="ic:baseline-favorite" class="icon heart" />
          <p>{{ question.favs }}</p>
        </div>
      </div>
      <open-in-tra-q :id="question.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import OpenInTraQ from './OpenInTraQ.vue'
import MessageContent from './MessageContent.vue'
import MessageHeader from './MessageHeader.vue'
import { Question } from '/@/apis/parser/question'
import { Icon } from '@iconify/vue'
import { useUser } from '/@/apis/user'
import { watchEffect } from 'vue'

interface Props {
  question: Question
}

const props = defineProps<Props>()
const { userId, user } = useUser()

watchEffect(() => {
  userId.value = props.question.userId
})
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  text-align: center;
  padding-left: 16px;
  color: #919191;
}
.message-footer {
  display: flex;
  justify-content: space-between;
}
.bars {
  display: flex;
  align-items: center;
  gap: 2px;
}
.icon {
  width: 20px;
  height: 20px;
}
.heart {
  color: #ff6b6b;
}
.cardbox {
  border-radius: 8px;
  background-color: #fff;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
}
</style>
