<template>
  <div class="boiling-box">
    <div class="nav">
      <el-menu @open="handleOpen" default-active="2" class="el-menu-vertical-demo nav-bg" :default-openeds="['1']">
        <el-menu-item index="2">
        <a class="list-group-item">
          <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
          <span>&nbsp;最新</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
        <a class="list-group-item">
          <i class="fa fa-fire fa-lg" aria-hidden="true"></i>
          <span>&nbsp;热门</span>
        </a>
        </el-menu-item>
        <el-menu-item index="4">
        <a class="list-group-item">
          <i class="fa fa-pinterest-square fa-lg" aria-hidden="true"></i>
          <span>&nbsp;关注</span>
          </a>
        </el-menu-item>
        <el-menu-item index="5">
        <a class="list-group-item">
          <i class="fa fa-dot-circle-o icon fa-lg" aria-hidden="true"></i>
          <span>&nbsp;我的圈子</span>
          </a>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
           <a class="list-group-item">
            <i class="fa fa-forumbee fa-lg" aria-hidden="true"></i>
            <span>&nbsp;推荐圈子</span>
            </a>
          </template>
          <el-menu-item index="1-1">内推招聘广场</el-menu-item>
          <el-menu-item index="1-2">技术交流圈</el-menu-item>
          <el-menu-item index="1-3">掘友请回答</el-menu-item>
          <el-menu-item index="1-4">树洞一下</el-menu-item>
          <el-menu-item index="1-5">上班摸鱼</el-menu-item>
          <el-menu-item index="1-6">更多</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.boiling-box {
  background: white;
  box-sizing: border-box;
  position: fixed;
  .nav {
    padding: 10px 0;
    :deep(.el-menu) {
      width: 180px;
      border-right-width: 0;
    }
    :deep(.el-icon-arrow-down:before) {
      content: "";
    }
    :deep(.el-sub-menu) {
      margin-top: 3px;
    }
    :deep(.el-sub-menu .el-menu-item) {
      font-size: 14px;
      color: #8a919f;
      min-width: 0px;
      padding-left: 40px !important;
      overflow: hidden;
    }
    :deep(.el-sub-menu__title) {
      font-size: 17px;
      height: 40px;
      line-height: 40px;
      padding: 0px 10px !important;
      margin: 0px 10px;
    }
    :deep(.el-menu-item) {
      font-size: 16px;
      margin: 3px 10px 0px 10px;
      height: 40px;
      line-height: 40px;
      padding: 0px 10px !important;
    }
    :deep(.el-menu-item.is-active) {
      background: #eaf2ff;
      color: #1e80ff;
      border-radius: 5px;
    }
  }
}
</style>
