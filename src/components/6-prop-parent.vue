<template>
  <!-- <div class="ry-container">
    <div class="ry-parent">
      <h4>父组件</h4>
      <h4>父组件接收到的值：{{ son }}</h4>
    </div>
    <SonComp @aa="getAA" @on-click="getClick" class="ry-son" :parent2son="name" ></SonComp>
  </div> -->
  <SonComp :blockArr = 'blockArr'></SonComp>
</template>

<script setup lang='ts'>
import SonComp from './6-prop-son.vue';
import {ref} from 'vue';
// let name = '父组件向子组件传递参数';

// let son = ref<string>();
// const getClick = (name:string) => {
//   console.log(name);
//   son.value = name;
//   console.log(son);
// }
// const getAA = (sonStr:string) => {
//   console.log(sonStr);
//   son.value = sonStr;
  
// }
const getHeight = () => {
  return Math.floor((Math.random()*10+3)) * 60
}
const getColor1 = () => {//十六进制颜色随机
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  return color;
}
const getColor = () => {
  const colorAngle = Math.floor(Math.random()*360);
  return 'hsla('+ colorAngle +',100%,50%,1)';
}
const blockArr = ref<any[]>([]);
const initArr = (num:number) => {
  for (let index = 0; index < num; index++) {
    blockArr.value?.push({
      height : getHeight(),
      color : getColor()
    });
  }
}
initArr(100);
</script>

<style scoped lang="scss">

@include b('container') {
  // border: 1px solid #ccc;
  width : 50%;
  height : 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3;
  // place-items: center;
  margin: 0 auto;
}

@include b(parent) {
  border: 1px solid #ccc;
}

@include b(son) {
  border: 1px solid #ccc;
}

</style>