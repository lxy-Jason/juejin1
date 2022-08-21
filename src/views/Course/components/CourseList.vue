<template>
  <div>
    <div v-for="item in list" class="item">
      <div class="item-cover">
        <img :src="item.cover" alt="" />
      </div>
      <div class="item-right">
        <div class="item-title">
          <span>{{ item.title }}</span>
        </div>
        <div class="item-desc">{{ item.desc }}</div>
        <div class="item-userInfo">
          <div class="portrait">
              <img :src="item.avatar" alt="头像" />
          </div>
          <span class="item-userName">{{ item.userName }}</span>
          <span class="item-level"><span class="level">{{ `Lv${item.level}` }}</span></span>
          <span class="item-tag">{{ item.tag[0] }}</span>
        </div>
        <div class="item-bookInfo">
          <span class="item-amount">{{ `￥${item.amount}` }}</span>
          <span class="item-chapters">{{ `已更新${item.chapters}小节 · ${item.purchaser}已购买` }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
const list=reactive([
  {
        title:'课程标题',
        desc:'课程详解',
        amount:'114.514',
        userName:'昵称',
        level:6,
        tag:['java技术专家'],
        chapters:16,
        purchaser:706,
        cover:'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48cd5f8442424b8e83fd8c063e289fa9~tplv-k3u1fbpfcp-watermark.image?',
        avatar:'https://p3-passport.byteacctimg.com/img/user-avatar/df11c2fd1ef2ccdb80a1b0e46c232dc8~300x300.image',
    },
])
</script>
<style lang="scss" scoped>
.item {
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  .item-cover img {
    width: 100px;
    height: 140px;
    object-fit: cover;
  }
  .item-right {
    margin-left: 20px;
    .item-title {
      font-size: 20px;
      color: #2e3135;
      font-weight: 400;
    }
    .item-desc {
      margin-top: 5px;
      height: 20px;
      line-height: 20px;
      color: #71777c;
    }
    .item-userInfo {
      height: 30px;
      margin-top: 6px;
      display: flex;
      align-items: center;
      .portrait {
        display: inline-block;
        width:26px;
        height:26px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
           }
          }
      .item-userName {
        font-size: 14px;
        margin-left: 10px;
      }
      .item-level {
        margin-left: 10px;
        .level {
          display: block;
          display: inline-block;
          height: 14px;
          line-height: 14px;
          color: white;
          background: #21a9fd;
          font-size: 10px;
          font-weight: bold;
          border-radius: 2px;
          padding: 0 1px;
}
      }
      .item-tag {
        margin-left: 10px;
        color: #333;
        font-size: 13px;
      }
    }
    .item-bookInfo {
      margin-top: 5px;
      .item-amount {
        font-size: 18px;
        color: #ed7b11;
      }
      .item-chapters {
        font-size: 13px;
        color: #71777c;
        margin-left: 10px;
        opacity: 0.6;
      }
    }
  }
}
</style>
