<script setup lang="ts">
const SearchName = ''
</script>

<template>
  <div class="SearchArea">
    <div class="gr1">
      <input
        v-model="SearchName"
        class="SearchBox"
        type="text"
        placeholder="検索"
      />
    </div>
    <div class="SearchButton">🔍</div>
  </div>
</template>

<style scoped>
.SearchArea {
  display: grid;
  place-content: center;
  place-items: center;
  padding-left: 7px;
  grid-template-columns: 1fr 64px;
  grid-template-rows: auto;
  border: solid 2px black;
  border-radius: 10px;
  /* background-color: aqua; */
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

.SearchButton {
  font-size: 20px;
  border: none;
}
</style>
