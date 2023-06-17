<script setup lang="ts">
const SearchName = ''
import SearchSVG from '/@/assets/search.svg'
</script>

<template>
  <div class="SearchArea">
    <input
      v-model="SearchName"
      class="SearchBox"
      type="text"
      placeholder="検索"
    />
    <img :src="SearchSVG" alt="検索" class="icon" />

    <!-- <div class="SearchButton">🔍</div> -->
  </div>
</template>

<style scoped>
.SearchArea {
  margin: 0 auto;
  max-width: 600px;
  display: grid;
  place-content: center;
  place-items: center;
  justify-items: center;
  align-items: center;
  padding-left: 7px;
  grid-template-columns: 1fr 50px;
  grid-template-rows: auto;
  border: solid 2px black;
  border-radius: 10px;
  /* background-color: aqua;  */
}

.SearchBox {
  width: 500px;
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
