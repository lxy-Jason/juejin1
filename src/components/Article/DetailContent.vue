<template>
  <div>
    <div class="author-info">
      <div>
        <span class="info-name">昵称</span>
        <span class="info-time">发布时间</span>
      </div>
      <div>
        <el-button type="primary" plain size="small">关注</el-button>
      </div>
    </div>
    <div class="box">
      <h2 class="box-title">
        标题
      </h2>
      <div class="box-content">内容。。。。。</div>
    </div>
  </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.author-info {
  display: flex;
  justify-content: space-between;
  span {
    display: block;
  }
  .info-name {
    font-weight: 700;
    color: #333;
  }
  .info-time {
    color: #909090;
    font-size: 14px;
    margin-top: 7px;
  }
}
</style>
