<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown split-button type="primary" @click="handleClick"  trigger="click">
      创作者中心
      <template #dropdown>
      <div>
        <el-dropdown-menu>
          <el-dropdown-item><i class="fa fa-pencil" aria-hidden="true"></i> 写文章</el-dropdown-item>
          <el-dropdown-item><i class="fa fa-gg-circle" aria-hidden="true"></i>发沸点</el-dropdown-item>
          <el-dropdown-item><i class="fa fa-code" aria-hidden="true"></i>写代码</el-dropdown-item>
        </el-dropdown-menu>
        </div>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('别急，急也没用')
}
</script>
<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
