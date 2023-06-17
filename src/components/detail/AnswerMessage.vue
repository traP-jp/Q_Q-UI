<template>
  <div class="cardbox">
    <message-header :user="user" date="2023/01/02" />
    <message-content :content="answer.content" />
    <div class="message-footer">
      <div class="bar">
        <icon icon="ic:baseline-favorite" class="icon" />
        <span>{{ answer.favs }}</span>
      </div>
      <open-in-traq :id="answer.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MessageContent from './MessageContent.vue'
import MessageHeader from './MessageHeader.vue'
import { Answer } from '/@/apis/parser/answer'
import { Icon } from '@iconify/vue'

interface Props {
  answer: Answer
}

const props = defineProps<Props>()

// TODO: get user from props.question.userId
const user = {
  id: props.answer.userId,
  name: 'toshi00',
  displayName: 'とし🍕'
}
</script>

<style scoped>
.message-footer {
  display: flex;
  justify-content: space-between;
}
.bar {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 2px;
}

.icon {
  width: 20px;
  height: 20px;
}

.cardbox {
  border-radius: 8px;
  background-color: #fff;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
}
</style>
