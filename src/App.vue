<template>
   <router-view/>
</template>

<script>
export default {
  name: "App",
};
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
