<template>
  <div>
    <img :src="imgUrl" :alt="user.name" />
    <div>
      <p>
        <span>{{ user.displayName }}</span
        ><span>{{ user.name }}</span>
      </p>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { User } from '/@/apis/parser/user'

interface Props {
  user: User
  date: string
}
const props = defineProps<Props>()
const imgUrl = computed(
  () => `https://q.trap.jp/api/v3/public/icon/${props.user.name}`
)
</script>

<style scoped></style>
