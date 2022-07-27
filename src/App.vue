<template>
<router-view></router-view>
</template>

<script setup>
import Header from "./components/header/Header.vue";
import NavList from "./components/header/NavList.vue";
import Home from "./views/Home/index.vue";
import Article from "./views/Article"
//详情页演示，有需要可以自行调换11
</script>
<style lang="scss">
/* 改变主题色变量 */
body {
  margin: 0px;
  background: #f4f5f5;
}
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 5px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
}
.cut-one {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
