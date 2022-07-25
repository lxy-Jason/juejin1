<template>
  <div>
    <div>
      <div class="item-name">
        <span>昵称</span>
        <el-divider direction="vertical"></el-divider>
        <span class="item-name2">发布时间</span>
      </div>
      <div class="item-box">
        <div>
          <div class="item-title">标题</div>
          <div class="item-content">内容。。。。。</div>
        </div>
      </div>
    </div>
    <div>
      <div class="item-name">
        <span>昵称</span>
        <el-divider direction="vertical"></el-divider>
        <span class="item-name2">发布时间</span>
      </div>
      <div class="item-box">
        <div>
          <div class="item-title">标题</div>
          <div class="item-content">内容。。。。。</div>
        </div>
      </div>
    </div>
    <div>
      <div class="item-name">
        <span>昵称</span>
        <el-divider direction="vertical"></el-divider>
        <span class="item-name2">发布时间</span>
      </div>
      <div class="item-box">
        <div>
          <div class="item-title">标题</div>
          <div class="item-content">内容。。。。。</div>
        </div>
      </div>
    </div>
    <div>
      <div class="item-name">
        <span>昵称</span>
        <el-divider direction="vertical"></el-divider>
        <span class="item-name2">发布时间</span>
      </div>
      <div class="item-box">
        <div>
          <div class="item-title">标题</div>
          <div class="item-content">内容。。。。。</div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default{}
</script>
<style lang="scss" scoped>
.item-name {
  margin-left:20px;
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
  margin-left:20px;
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
</style>
