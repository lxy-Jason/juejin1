<template>
  <el-card class="box-card">
    <div class="card-header">
                <el-col :span="6">
                    <img class="icon"
                        src="https://s1.ax1x.com/2022/07/23/jXfLUP.jpg"
                        alt="">
                </el-col>
                <el-col :span="18">
                    <el-row>
                        <div class="text">&nbsp;&nbsp;BEAR小熊帽</div>
                    </el-row>
                </el-col>
            </div>
    <el-divider />
    <el-row :gutter="20">
    <el-col :span="6"><div class="data"><div class="data1">111</div><div class="data2">沸点</div></div></el-col>
    <el-col :span="6"><div class="data"><div class="data1">111</div><div class="data2">圈子</div></div></el-col>
    <el-col :span="6"><div class="data"><div class="data1">111</div><div class="data2">关注</div></div></el-col>
    <el-col :span="6"><div class="data"><div class="data1">111</div><div class="data2">关注者</div></div></el-col>
  </el-row>
  </el-card>
   <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>精选沸点</span>
      </div>
    </template>
    <div>我开摆了</div>
  </el-card>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>热门话题</span>
      </div>
    </template>
    <div v-for="(item, index) in list" class="scroll-item" @click="$emit('getTopic', `#${item.topic}#`)">
            <span v-if="item.isRem" class="rem">荐</span>
            <span v-if="item.isAward" class="award">奖</span>
            <span>{{ `#${item.topic}#` }}</span>
          </div>
      <el-divider />
      <div class="more">查看更多 ></div>
  </el-card>
</template>
<script setup>
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
.box-card {
  width: 260px;
  margin-bottom:15px;
  .scroll-item {
    margin: 10px 0px 10px 10px;
    cursor: pointer;
    font-size:14px;
    span{
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
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.icon {
    width: 50px;
    border-radius: 50%;
}
.data{
    display:flex;
    flex-direction: column;
}
.data1{
    font-size: 16px;
    line-height: 28px;
}
.data2{
    color:#8a919f;
    font-size: 13px;
    line-height: 24px;
}
.more{
  display: flex;
  justify-content: center;
  align-items: center;
  color:#8a919f;
  font-size: 13px;
}
</style>
