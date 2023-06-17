<template>
  <div class="cardbox">
    <message-header :user="user" date="2023/01/02" />
    <message-content :content="question.content" />
    <div class="message-footer">
      <div class="toolbar">
        <div class="bars">
          <icon icon="ic:outline-mode-comment" class="icon" />
          <p>{{ question.responseNum }}</p>
        </div>
        <div class="bars">
          <icon icon="ic:baseline-favorite" class="icon" />
          <p>{{ question.favs }}</p>
        </div>
      </div>
      <opne-in-traq :id="question.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MessageContent from './MessageContent.vue'
import MessageHeader from './MessageHeader.vue'
import { Question } from '/@/apis/parser/question'
import { Icon } from '@iconify/vue'

interface Props {
  question: Question
}

const props = defineProps<Props>()

// TODO: get user from props.question.userId
const user = {
  id: props.question.userId,
  name: 'toshi00',
  displayName: 'とし🍕'
}
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  text-align: center;
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
.cardbox {
  border-radius: 8px;
  background-color: #fff;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
}
</style>
