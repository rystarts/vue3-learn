<template>
  <Layout></Layout>
</template>

<script setup lang='ts'>
  // import RefDemo from './components/1-Ref.vue';
  // import ReactiveDemo from './components/2-reactive.vue';
  // import ShoppingDemo from './components/3-shopping.vue';
  // import Life from './components/4-life.vue';
  import Layout from './components/5-layout.vue';
</script>

<style lang="scss">
// App.vue 一般不加scop 全局生效
#app {
  @include bfc
}
</style>