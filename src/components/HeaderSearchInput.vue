<template>
  <div class="wrapper">
    <input
      v-model="value"
      type="text"
      :placeholder="placeholder"
      class="input"
    />
    <img :src="SearchSVG" alt="検索" class="icon" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SearchSVG from '/@/assets/search.svg'

interface Props {
  modelValue: string
  placeholder: string
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const props = defineProps<Props>()
const value = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v)
})
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  border: 1px solid #dcdedf;
  border-radius: 4px;
  padding: 4px;
  padding-left: 10px;
}
.input {
  border: none;
  width: 100%;
  height: 32px;
}
.input:focus {
  outline: none;
}
.icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
</style>
