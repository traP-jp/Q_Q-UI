<template>
  <div class="SearchArea">
  <input class="SearchBox" type="text" placeholder="検索" />
  <div class="SearchButton"><button @click="Search">🔍</button></div>
  </div>
</template>


<script setup lang="ts">

  const SearchName = ''
  const Search = (SearchName) => '1'

</script>

<style scoped>

html{
  font-size: 16px;
}
.SearchArea {
  display: block;
  position: relative;
  width: 500px;
  height: 100px;
  margin: 0 auto;
}

.SearchLabel {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1rem;
  color: #a0a0a0;
  transition: all 0.25s ease;
}
.SearchLabel.focus {
  position: relative;
  top: -25px;
  left: 5px;
  font-size: 14px;
  color: #fff;
  bottom: 2px;
}

.SearchBox {
  position: relative;
  display: block;
  width: 500px;
  margin-top: 50px;
  padding: 15px;
  border: solid 2px rgb(56, 50, 210);
  border-radius: 10px;
  font-size: 16px;
  color: #000;
  outline: none;
}

.SearchButton{
  position: absolute;
  right: -20px;
  top: 26px;
  font-size: 17px;
  transform: translateY(-50%);
}

</style>
