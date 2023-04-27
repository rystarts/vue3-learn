<template>
  <div class="ry-content">
    <div style="text-align: center;">content</div>
    <div class="ry-content__items" v-for="i,index in num">
      {{ i }} -- {{ index }}
    </div>
  </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue';
const num = ref(10);
</script>

<style scoped lang="scss">
@include b('content') {
  display: flex;
  flex-direction: column;
  flex: 1;
  // 和flex搭配使用 如果内容被裁剪 则显示滚动条
  overflow: auto;
  @include e(items) {
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    background-color: #ccc;
    border-radius: 5px;
    height: 50px;
    text-align: center;
  }
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {

}
li:hover {
  background-color: aquamarine;
}
</style>