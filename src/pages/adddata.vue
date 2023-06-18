<template>
  <div>
    <h2>password</h2>
    <input v-model="password" type="text" />
  </div>
  <div>
    <h2>question</h2>
    <textarea v-model="question" class="text-area" />
    <button @click="addQuestion">add</button>
  </div>
  <div>
    <h2>answer</h2>
    <textarea v-model="answer" class="text-area" />
    <button @click="addAnswer">add</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { baseUrl } from '/@/apis/baseUrl'

const password = ref('')
const question = ref('')
const answer = ref('')

const addAnswer = async () => {
  const res = await fetch(`${baseUrl}/api/answers/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: answer.value
  })
  console.log(res)
}

const addQuestion = async () => {
  const res = await fetch(`${baseUrl}/api/questions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: question.value
  })
  console.log(res)
}
</script>

<style scoped>
.text-area {
  width: 100%;
  display: block;
  border: 1px solid #d9d9d9;
  height: 200px;
}
</style>
