<template>
  <div class="directory">
    <div class="title">目录</div>
    <ul ref="nav" class="nav" @click="jump"></ul>
  </div>
</template>

<script setup>
const { useListStore } = require("@/store");
const { onMounted, watchEffect, ref, onBeforeMount, onUnmounted } = require("@vue/runtime-core");
const { storeToRefs } = require("pinia");
const listArr = useListStore();
const { list } = storeToRefs(listArr);
const nav = ref(null);

const renderNav = (list) => {
  if (!nav.value) return;
  let maxH = 6;
  let data = list.value.map((item, index) => {
    if (item.id < maxH) {
      maxH = item.id;
    }
    return `<li title="${
      item.content
    }"  data-index="${index}"><div style="margin-left:${
      item.id * 5
    }px" data-index="${index}">${item.content}</div></li>`;
  });

  nav.value.innerHTML = data.join("");
};

const jump = (e) => {
  let index = e.target.getAttribute("data-index");
  let target = document.getElementById(index).offsetTop;
  if (target) {
    window.scrollTo({
      top: target - 80,
    });
  }
};
let timer;
let fun
const scroll = () => {
  window.addEventListener("scroll", fun = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      let _scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      console.log(_scrollTop);
    },500);
});
};
onMounted(() => {
});
onBeforeMount(() => {
  scroll();
})
onUnmounted(() => {
  window.removeEventListener('scroll',fun,true)
})
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
      position: relative;
      list-style: none;
      padding: 8px;
      cursor: pointer;
      overflow: hidden;
      div {
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:hover {
        background: #f7f8fa;
      }
    }
    .active {
      color: #007fff;
      & ::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        margin-top: 7px;
        width: 4px;
        height: 16px;
        background: #1e80ff;
        border-radius: 0 4px 4px 0;
      }
    }
  }
}
</style>
