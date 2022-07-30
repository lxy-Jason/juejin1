<template>
  <div class="contanier">
    <div class="icon" v-for="(item, index) in list">
      <el-badge :value="item.value" class="item" type="primary" :hidden="item.hidden"
        ><el-button round circle @mouseenter.native="mouseenter(item)" @mouseleave.native="mounseleave(item)"><img :src="item.icon1" /></el-button
      ></el-badge>
    </div>
 <el-divider></el-divider>
    <!-- 固定icon -->
    <div class="icon" v-for="(item, index) in fixed">
      <el-button round circle @mouseenter="mouseenter(item)" @mouseleave="mounseleave(item)">
        <img :src="item.icon1" />
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const list = ref([
  {
    value: '114',
    icon:require("@/assets/点赞.png"),
    selectedIcon:require("@/assets/点赞 (1).png"),
    hidden: false,
    icon1:require("@/assets/点赞.png"),
  },
  {
    value: '514',
    icon: require("@/assets/评论.png"),
    selectedIcon: require("@/assets/评论 (1).png"),
    hidden: false,
    icon1: require("@/assets/评论.png"),
  },
  {
    value: '514',
    icon: require("@/assets/收藏.png"),
    selectedIcon: require("@/assets/收藏-选中.png"),
    hidden: true,
    icon1: require("@/assets/收藏.png"),
  },
  {
    value: '514',
    icon: require("@/assets/转发.png"),
    selectedIcon: require("@/assets/转发 (1).png"),
    hidden: true,
    icon1: require("@/assets/转发.png"),
  },

])
const fixed = ref([
  {
    icon: require("@/assets/举报.png"),
    selectedIcon: require("@/assets/信访举报.png"),
    icon1:require("@/assets/举报.png"),
  },
  {
    icon: require("@/assets/缩放.png"),
    selectedIcon: require("@/assets/缩放 (1).png"),
    icon1:require("@/assets/缩放.png"),
  },
])

const mouseenter = (item) => {
  item.icon1 = item.selectedIcon
}
const mounseleave = (item) => {
  item.icon1 = item.icon
}
</script>
<style lang="scss" scoped>
.contanier {
  text-align: center;
  .icon {
    margin-bottom: 20px;
  }
  :deep(.el-button) {
    height: 45px;
    width: 45px;
    min-height: 45px;
    img {
      width: 20px;
      height: 20px;
    }
  }
  :deep(.el-button.is-circle) {
    padding: 0px;
  }
  :deep(.el-badge__content--primary, .el-badge__content.is-fixed) {
    background: #b2bac2;
    right: 15px;
  }
  .separate {
    font-size: 13px;
    color: #b2bac2;
    margin-bottom: 10px;
  }
}
</style>
