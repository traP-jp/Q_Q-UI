<template>
  <div>
    <message-header :user="user" date="2023/01/02" />
    <message-content :content="answer.content" />
    <div>
      <div>
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
