<template>
  <div class="nav">
    <div class="nav-box">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          @click="changeActive(item)"
          :class="{ active: active == item ? true : false }"
        >{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(){
  const list = ref([
"综合",
"关注",
"后端",
"前端",
"Android",
"iOS",
"人工智能",
"开发工具",
"代码人生",
"阅读",
]);
const active = ref("综合");
const changeActive = (item) => {
  active.value = item;
};
return{
    list,
    active,
    changeActive
  }
  },
};
</script>

<style lang="scss" scoped>
.nav {
  height: 45px;
  background: white;
  line-height: 45px;
  .nav-box {
    width: 960px;
    margin: auto;
    ul {
      display: flex;
      list-style-type: none;
      padding: 0px;
      color: #71777c;
      font-size: 14px;
      margin: 0px;
      li {
        margin-right: 20px;
        cursor: pointer;
      }
      li:hover {
        color: #007fff;
      }
      .active {
        color: #007fff;
      }
    }
  }
}
</style>