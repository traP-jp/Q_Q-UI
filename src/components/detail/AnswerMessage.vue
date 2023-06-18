<template>
  <div class="cardbox">
    <message-header v-if="user" :user="user" :date="answer.updatedAt" />
    <message-content :content="answer.content" />
    <div class="message-footer">
      <div class="toolbar">
        <icon icon="ic:baseline-favorite" class="icon heart" />
        <span>{{ answer.favs }}</span>
      </div>
      <open-in-tra-q :id="answer.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import OpenInTraQ from './OpenInTraQ.vue'
import MessageContent from './MessageContent.vue'
import MessageHeader from './MessageHeader.vue'
import { Answer } from '/@/apis/parser/answer'
import { Icon } from '@iconify/vue'
import { useUser } from '/@/apis/user'
import { watchEffect } from 'vue'

interface Props {
  answer: Answer
}

const props = defineProps<Props>()
const { userId, user } = useUser()

watchEffect(() => {
  userId.value = props.answer.userId
})
</script>

<style scoped>
.message-footer {
  display: flex;
  justify-content: space-between;
}
.toolbar {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 2px;
  padding-left: 16px;
  color: #919191;
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
