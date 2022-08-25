<template>
  <el-card class="box-card">
    我是沸点数据
    <el-divider />
    <div class="card-bottom">
    <div class="bottom-divider"><i class="fa fa-share" aria-hidden="true"></i></div>
    <div class="bottom-divider"><i class="fa fa-commenting-o" aria-hidden="true"></i></div>
    <div class="bottom-divider"><i class="fa fa-thumbs-up" aria-hidden="true"></i></div>
    </div>
  </el-card>
</template>
<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
  margin-top:20px;
}
.card-bottom{
  display:flex;
}
.bottom-divider{
  width:33%;
  display:flex;
  justify-content:center;
  align-item:center;
}
.bottom-divider:hover {
	color: #ccc;
}
</style>
