<template>
  <div class="directory">
    <div class="title">目录</div>
    <ul ref="nav" class="nav">
      <li
        v-for="(i, index) in list"
        :key="index"
        title="i.content"
        @click="jump(index)"
        :class="activeIndex === index ? 'active' : ''"
      >
        <div :style="{ marginLeft: size(i.id) }">{{ i.content }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { useListStore } = require("@/store");
const {
  watchEffect,
  ref,
  onBeforeMount,
  onUnmounted,
} = require("@vue/runtime-core");
const { storeToRefs } = require("pinia");
const listArr = useListStore();
const { list } = storeToRefs(listArr);

let activeIndex = ref(0);
//动态计算缩进大小
const size = (num) => {
  return num * 5 + "px";
};
//点击目录跳转
const jump = (index) => {
  activeIndex.value = index;
  let target = document.getElementById(index).offsetTop;
  if (target) {
    window.scrollTo({
      top: target - 80,
    });
  }
};
const hTagHeight = ref([])
//获取h标签距离页面顶部的距离
const getHtagHeight = () => {
  let tag = document.querySelectorAll('.jump-site')
  let arr = []
  for(let i = 0; i < tag.length; i++){
    arr.push(tag[i].offsetTop)
  }
  hTagHeight.value = arr
}

let timer;
let fun;
let height = ref(0);
//鼠标滚动获取距离顶部的距离
const scroll = () => {
  window.addEventListener(
    "scroll",
    (fun = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        let _scrollTop =
          window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop;
        height.value = _scrollTop + 100;
        getHtagHeight()
        activeScroll()
      }, 500);
    })
  );
};
//激活样式跟随页面滚动
const activeScroll = () => {
  let arr = hTagHeight.value
  if(arr[0] > height.value ) return
  else if(arr[arr.length - 1] < height.value){
    activeIndex.value = arr.length
  }
  for(let i = 0; i < arr.length - 1;i++){
    if(arr[i] < height.value && arr[i+1] > height.value ){
      return activeIndex.value = i
    }
  }
}
onBeforeMount(() => {
  scroll();
});
onUnmounted(() => {
  window.removeEventListener("scroll", fun);
});
watchEffect(() => {
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
