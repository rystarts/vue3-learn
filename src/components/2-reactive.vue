<template>
  <div>
    <form>
        <input v-model="user.name" type="text">
        <br>
        <input v-model="user.age" type="text">
        <br>
        <button @click.prevent="submit">submit</button>
        <br>
        {{ user }}
    </form>
  </div>
</template>

<script setup lang='ts'>
    import {ref, reactive} from 'vue';
    // ref 可以传递任意对象
    // reactive 只能传递引用对象 
    const a = reactive(['m','k']);
    const b = ref('x');
    type User = {
        name : string;
        age : number
    }
    let user = reactive<User>({
        name : 'xx',
        age : 2
    });
    console.log(a,b,user);
    // ref 取值 赋值都需要.value
    // reactive 不需要.value
    const submit = () => {
        console.log(user);
    }
    // reactive 是代理proxy对象 不能直接赋值，会覆盖代理对象
    // 需要点属性 进行赋值




</script>

<style scoped>

</style>