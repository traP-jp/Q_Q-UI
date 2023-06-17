<template>
  <div class="container">
    <img :src="imgUrl" :alt="user.name" class="icon" />
    <div class="name-container">
      <p>
        <span class="display-name">{{ user.displayName }}</span
        ><span class="id-name">@{{ user.name }}</span>
      </p>
      <p class="date">{{ date }}</p>
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

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
}
.name-container {
  width: 100%;
}
.display-name {
  font-weight: bold;
  font-size: 1rem;
  color: #262626;
}
.id-name {
  font-size: 0.875rem;
  color: #919191;
}
.date {
  font-size: 0.875rem;
  color: #919191;
}
</style>
