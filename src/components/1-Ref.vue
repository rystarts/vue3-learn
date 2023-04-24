<template>
    <div>
        {{ aa }}
        <br>
        {{ bb }}
        <br>
        {{ shallowObj }}
        <br>
        {{ myRefObj }}
        <br>
        <h1 ref="refDom" id = 'refDom'> ref - dom </h1>
    </div>
    <hr>
    <button @click="update">update</button>
</template>
  
<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue';

/**
 * ref : 响应式数据
 * isRef : 判断是否为Ref对象
 * shallowRef : 浅ref 只响应修改value的值，更深层次的不会响应
 *              shallowRef 会被 ref 影响 ，存在ref shoallowRef也会响应
 * triggerRef : 强制刷新响应
 * customRef : 自定义Ref
 * ref 可以作用于 dom 对象
 */

function MyRef<T>(value: T) {
    let timer: any;
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                // 设置定时 防抖 多次点击只触发一次
                clearTimeout(timer);
                // timer = setTimeout(() => {
                    value = newValue;
                    console.log("point point ");
                    trigger();
                // }, 500);
                
            }
        }
    })
}

var aa = 'aa';
var bb = ref('bb');
// var bb = 'bb';
type ShallowObj = {
    name: string,
    age: number
}
var shallowObj = shallowRef<ShallowObj>({
    name: 'shallow',
    age: 2
});
//定义MyRef
var myRefObj = MyRef('myref');
// ref获取dom
var refDom = ref<HTMLHeadingElement>();
const update = () => {
    aa = 'aa变了'
    console.log(aa);
    //   bb.value = 'bb变了'
    // bb = 'bb变了'
    console.log(bb);
    //isRef 判断是否是ref对象
    console.log('aa is ref : ' + isRef(aa));
    console.log('bb is ref : ' + isRef(bb));
    // shallowRef 浅ref 只能响应到value的值, value里面的只赋值不响应
    // 下面只赋值 不响应 如果和 ref 一起用 会受影响
    shallowObj.value.name = 'change shallow name';
    //triggerRef强制更新
    triggerRef(shallowObj);
    // 下面可以响应
    shallowObj.value = {
        name: 'change shallow name',
        age: shallowObj.value.age
    };
    //自定义ref
    // myRefObj.value = 'myref change ---'
    // ref 获取到dom
    console.log(refDom.value?.innerHTML);
    
}
</script>
  
<style scoped></style>