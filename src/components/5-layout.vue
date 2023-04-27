<template>
  <div class="ry-box">
    <div>
      <Menu></Menu>
    </div>
    <div class="ry-box__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Menu from '../layout/Menu.vue';
import Header from '../layout/Header.vue';
import Content from '../layout/Content.vue';
</script>

<style scoped lang="scss">
@include b('box') {
  // 设置为bfc height 100 / overflow hidden
  @include bfc;
  display: flex;
  @include e('right') {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>