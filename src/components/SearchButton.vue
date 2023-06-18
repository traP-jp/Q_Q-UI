<script setup lang="ts">
import SearchSVG from '/@/assets/search.svg'
import { computed } from 'vue'

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

<template>
  <p id="type-3"></p>
  <div class="SearchArea">
    <input
      v-model="value"
      class="SearchBox"
      type="text"
      :placeholder="placeholder"
    />
    <img :src="SearchSVG" alt="検索" class="icon" />
  </div>
</template>

<style scoped>
.SearchArea {
  margin: 50px auto;
  margin-bottom: 70px;
  max-width: 600px;
  display: grid;
  justify-items: center;
  align-items: center;
  padding-left: 7px;
  grid-template-columns: 1fr 50px;
  grid-template-rows: auto;
  border: solid 1px #d9d9d9;
  box-shadow: 2px 2px 4px 2px #d9d9d9;
  border-radius: 10px;
}

.SearchBox {
  width: 100%;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: none;
  font-size: 16px;
  color: #000;
  outline: none;
}

.icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
}
</style>
