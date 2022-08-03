<template>
  <div>
    <el-popover placement="bottom-start" :width="300" trigger="click">
      <template #reference>
        <span>
          <slot></slot>
        </span>
      </template>
      <div>
        <el-input placeholder="搜索话题名称" suffix-icon="Search"></el-input>
        <el-divider></el-divider>
        <el-scrollbar height="300px" class="scroll">
          <div v-for="(item, index) in list" class="scroll-item" @click="$emit('getTopic', `#${item.topic}#`)">
            <span v-if="item.isRem" class="rem">荐</span>
            <span v-if="item.isAward" class="award">奖</span>
            <span>{{ `#${item.topic}#` }}</span>
          </div>
        </el-scrollbar>
      </div>
    </el-popover>
  </div>
</template>

<script setup>
import {Search} from "@element-plus/icons";
const list =[
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: true,
      isAward: true,
  },
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: true,
      isAward: false,
  },
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: false,
      isAward: true,
  },
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: false,
      isAward: false,
  },
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: false,
      isAward: false,
  },
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: false,
      isAward: false,
  },
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: false,
      isAward: false,
  },
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: false,
      isAward: false,
  },
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: false,
      isAward: false,
  },
  {
      topic: "佩洛西密麻麻石蜡",
      isRem: false,
      isAward: false,
  }
]
</script>
<style lang="scss" scoped>
:deep(.el-input__wrapper){
  background-color: #f4f5f5;
}
:deep(.el-divider--horizontal) {
  margin: 10px 0;
}
.scroll-item {
  margin: 20px 0px 20px 10px;
  cursor: pointer;
  span {
    margin-right: 5px;
  }
  .rem {
    color: white;
    background: blue;
    padding: 3px 4px;
    border-radius: 4px;
    font-size: 12px;
  }
  .award {
    color: white;
    background: orange;
    padding: 3px 4px;
    border-radius: 4px;
    font-size: 12px;
  }
}
</style>
