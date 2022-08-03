<template>
  <div class="linkPanel">
    <el-popover placement="bottom-start" :width="320" trigger="click">
      <template #reference>
        <span>
          <slot></slot>
        </span>
      </template>
      <el-input v-model="input" placeholder="输入网页链接" />
      <div class="tip">
      <span style="margin-right:70px">自动抓取网页链接的标题和头图</span>
      <span class="add"  @click="$emit('getLink', input)">➕添加</span>
      </div>
    </el-popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  background-color: #f4f5f5;
}
.tip{
  display:flex;
  padding:13px 0px 0px;
  .add{
    color:#1E80FF;
    opacity:0.6;
    cursor: pointer;
  }
}
</style>
