<template>
  <div>
    <message-header :user="user" date="2023/01/02" />
    <message-content :content="question.content" />
    <div>
      <div>
        <div>
          <span>{{ question.responseNum }}</span>
        </div>
        <div>
          <span>{{ question.favs }}</span>
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
