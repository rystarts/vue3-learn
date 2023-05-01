<template>
  <div class="ry-cc">
    <!-- <h4>子组件</h4>
    <h4>父组件传递过来的参数：{{ parent2son }}</h4>
    <button @click="send">发送</button> -->
    <div v-for="item in blockArr" :style="item" class="ry-block"></div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
// const value = withDefaults(defineProps<{
//   parent2son : string
// }>(), {
//   parent2son : '123'
// });

// const emit = defineEmits<{
//   (e:"on-click", name:string):void,
//   (e:"aa", sonStr:string):void
// }>();

// const send = () => {
//   emit('on-click','haha');
//   emit('aa','oooooooooooooooooooooooo');
// }
// console.log(value.parent2son);

var data = defineProps<{
  blockArr: any[]
}>();
const blockArr = ref<any[]>([]);

const init = () => {
  //获取屏幕尺寸
  const width = 100;
  const clientWidth = document.body.clientWidth;
  const column = Math.floor(clientWidth / 120);
  const heightArr:number[] = [];
  // 初始化块数组
  for (let i = 0; i < data.blockArr.length; i++) {
    if (i <= column) {
      blockArr.value.push({
        width: width + 'px',
        height: data.blockArr[i].height + 'px',
        backgroundColor: data.blockArr[i].color,
        top: 20 + 'px',
        left: (width * i + (i + 1) * 10) + 'px',
      });
      heightArr.push(data.blockArr[i].height + 20);
    } else {
      debugger;
      // 寻找最短的块
      let index = 0;
      let currentHeight = heightArr[0];
      for (let j = 1; j < heightArr.length; j++) {
        if(heightArr[j] < currentHeight) {
            index = j;
            currentHeight = heightArr[j];
        }
      }
      blockArr.value.push({
        width: width + 'px',
        height: data.blockArr[i].height + 'px',
        backgroundColor: data.blockArr[i].color,
        top: heightArr[index] + 10 + 'px',
        left: (width * index + (index + 1) * 10) + 'px',
      });
      heightArr[index] = heightArr[index] + data.blockArr[i].height + 10;
    }

  }
  console.log(blockArr.value);

}

onMounted(() => {
  init();
})

</script>

<style scoped lang="scss">
@include b(cc) {
  // display: flex;
  // flex-direction: row;
  // align-items: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
}

@include b(block) {
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 20px;
}
</style>