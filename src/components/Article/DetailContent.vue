<template>
  <div>
    <div class="author-info">
      <div>
      <div class="box">
      <h2 class="box-title">
        标题
      </h2>
    </div>
        <span class="info-name">昵称</span>
        <span class="info-time">发布时间</span>
      </div>
      <div>
        <el-button type="primary" plain class="button">➕ 关注</el-button>
      </div>
    </div>
    <p>
    </p>
    <div class="box">
      <div class="box-content">内容。。。。。</div>
    </div>
    <p>
    </p>
    <span class="label">分类：</span> 
    <el-button type="info" plain class="jiange">前端</el-button>
    <span class="label">标签：</span> 
    <el-button type="primary" plain>前端</el-button>
  </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.author-info {
  display: flex;
  justify-content: space-between;
  .box-title{
    font-size:32px;
  }
  span {
    display: block;
  }
  .info-name {
    font-weight: 500;
    color: #333;
  }
  .info-time {
    color: #909090;
    font-size: 14px;
    margin-top: 7px;
  }
  .button{
    margin-top:100px
  }
}
.label{
    color: #515767;
    font-size: 15px;
    margin-top: 50px;
  }
  .jiange{
    margin-right:40px;
  }
</style>
