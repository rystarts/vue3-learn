<template>
  <div>
    <div  ref="div1">通过ref获取dom信息 {{ msg }} </div>
    <el-button type="success" @click="update">{{ msg }}</el-button>
    <div>{{ msg }}</div>
  </div>
</template>

<script setup lang='ts'>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue';
console.log('setup1');
const div1 = ref<HTMLDivElement>();
const msg = ref<string>('我还没被更新');
// 创建之前
onBeforeMount(() => {
    console.log('创建之前',div1.value);
})
// 创建之后
onMounted(()=>{
    console.log('创建之后',div1.value);
    
})

const update = () => {
    msg.value = '我被更新了'
}

console.log('setup2');
// 更新之前
onBeforeUpdate(()=>{
    console.log('更新之前',div1.value?.innerText);
    
})
// 更新之后
onUpdated(()=>{
    console.log('更新之后',div1.value?.innerText);
    
})
console.log('setup3');
// 销毁之前
onBeforeUnmount(()=>{
    console.log('销毁之前');
    
})
// 销毁之后
onUnmounted(()=>{
    console.log('销毁之后');
    
})
console.log('setup4');


</script>

<style scoped>

</style>