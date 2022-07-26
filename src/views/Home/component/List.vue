<template>
  <div class="list">
    <div class="item-name">
      <span>{{ data.author }}</span>
      <el-divider direction="vertical"></el-divider>
      <span class="item-name2">{{ data.createTime }}</span>
      <el-divider direction="vertical"></el-divider>
      <span class="item-name2">{{ data.category }}</span>
    </div>

    <div class="item-box">
      <div>
        <div class="item-title">{{ data.title }}</div>
        <div class="item-content">{{ data.describe }}</div>
      </div>
    </div>

    <div class="picture" v-if="data.picture" :style="{backgroundImage:`url(${data.picture})`}"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      id:String,
      author: String,
      createTime: Object,
      category:String,
      title: String,
      describe: String,
      picture:String,
    },
  },
  data() {
    return {
      name: "曾思程",
      time: "时间",
      title: "标题",
      content: "内容。。。。。",
    };
  },
};
</script>
<style lang="scss" scoped>
.list {
  position: relative;
  .picture {
    height: 70px;
    width: 70px;
    right: 10px;
    top:10px;
    background-color: black;
    position: absolute;
    background-size:cover;
  }
  .item-name {
    margin-left: 20px;
    padding-top: 10px;
    font-size: 13px;
    color: #747a81;
  }
  .item-name2 {
    padding-top: 10px;
    font-size: 13px;
    color: #747a81;
  }
  .item-box {
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid #e5e6eb;

    .item-title {
      font-weight: 700;
      color: #1d2129;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      flex: 1;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .item-content {
      margin-top: 10px;
      font-size: 13px;
      color: #86909c;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .item-img img {
      width: 120px;
      height: 80px;
      margin-left: 10px;
    }
  }
}
</style>
