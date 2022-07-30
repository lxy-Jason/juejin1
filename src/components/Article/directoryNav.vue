<template>
  <div class="directory">
    <div class="title">目录</div>
    <ul ref="nav" class="nav" @click="jump"></ul>
  </div>
</template>

<script setup>
const { useListStore } = require("@/store");
const { onMounted, watchEffect, ref } = require("@vue/runtime-core");
const { storeToRefs } = require("pinia");
const listArr = useListStore();
const { list } = storeToRefs(listArr);
const nav = ref(null);

const renderNav = (list) => {
  if (!nav.value) return;
  let data = list.value.map((item, index) => {
    return `<li title="${item.content}" data-index="${index}"><div data-index="${index}">${item.content}</div></li>`;
  });
  nav.value.innerHTML = data.join("");
};

const jump = (e)=>{
  console.log(e.target);
  let index = e.target.getAttribute('data-index')
  let target = document.getElementById(index)
  if(target){
    target.scrollIntoView(true)
  }
}
onMounted(() => {});
watchEffect(() => {
  renderNav(list);
});

//
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
.directory {
  position: sticky;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  .title {
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    padding: 8px;
    margin: 8px;
  }
  ::v-deep .nav {
    height: 500px;
    overflow: scroll;
    padding: 0;
    font-size: 12px;
    li {
      list-style: none;
      padding: 8px;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      div{
        height: 100%;
      }
      &:hover {
        background: #f7f8fa;
        color: #007fff;
      }
    }
  }
}
</style>
