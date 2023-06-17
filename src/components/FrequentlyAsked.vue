<template>
  <div class="question">
    <div class="content">今日のご飯は何がいいですか？</div>
    <div class="createdAt">2023/06/17 16:30</div>
    <div class="responseNum">◆2</div>
    <div class="tags">tags:</div>
  </div>

  <div class="question">
    <div class="content">今日のご飯は何がいいですか？</div>
    <div class="createdAt">2023/06/17 16:30</div>
    <div class="responseNum">◆2</div>
    <div class="tags">tags:</div>
  </div>
  <div class="question">
    <div class="content">今日のご飯は何がいいですか？</div>
    <div class="createdAt">2023/06/17 16:30</div>
    <div class="responseNum">◆2</div>
    <div class="tags">tags:</div>
  </div>
  <div class="question">
    <div class="content">今日のご飯は何がいいですか？</div>
    <div class="createdAt">2023/06/17 16:30</div>
    <div class="responseNum">◆2</div>
    <div class="tags">tags:</div>
  </div>
  <div class="question">
    <div class="content">今日のご飯は何がいいですか？</div>
    <div class="createdAt">2023/06/17 16:30</div>
    <div class="responseNum">◆2</div>
    <div class="tags">tags:</div>
  </div>
</template>

<style>
html {
  font-size: 14px;
}
.question {
  display: grid;
  /* justify-items: center; */
  align-items: center;
  grid-template-columns: 3fr 1fr 8fr;
  grid-template-rows: auto auto;
  max-width: 712px;
  max-height: 64px;
  border-top: solid 1px #d9d9d9;
}

.content {
  font-size: 16px;
  color: #000000;
  grid-column: 1 /5;
  grid-row: 1 /2;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.createdAt {
  color: #919191;
  grid-column: 1 /2;
  grid-row: 2 /3;
  padding-top: 3px;
  padding-bottom: 4px;
  padding-left: 20px;
}

.responseNum {
  color: #919191;
  grid-column: 2 /3;
  grid-row: 2 /3;
  padding-bottom: 5px;
  padding-left: 10px;
}

.tags {
  color: #919191;
  grid-column: 3 /4;
  grid-row: 2/ 3;
  padding-bottom: 5px;
  padding-left: 30px;
}
</style>
