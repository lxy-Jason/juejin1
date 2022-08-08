<template>
  <div class="list">
    <div class="item-name">
      <span>{{ data.author }}</span>
      <el-divider direction="vertical"></el-divider>
      <span class="item-name2">{{ data.createTime }}</span>
      <el-divider direction="vertical"></el-divider>
      <span class="item-name2">{{ data.category }}</span>
    </div>

    <div class="item-box" @click="jump">
      <div>
        <div class="item-title">{{ data.title }}</div>
        <div class="item-content">{{ data.describe }}</div>
      </div>
      <el-row class="List-icons">
        <el-button plain v-for="(iconData, index) in ListIconData" :key="index"  
        @mouseenter="(e)=>{iconData.mouseEnter(e,iconData)}"
        @mouseleave="(e)=>{iconData.mouseLeave(e,iconData)}"
        @click="(e) => {iconData.clickHandle(e,iconData)}">
          <img :src="iconData.icon" /> 
          {{iconData.value}}
        </el-button>
      </el-row>
    </div>

    <div
      class="picture"
      v-if="data.picture"
      :style="{ backgroundImage: `url(${data.picture})` }"
    ></div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  props: {
    data: {
      id: String,
      author: String,
      createTime: Object,
      category: String,
      title: String,
      describe: String,
      picture: String,
      watch:Number,
      like:Number,
      comment:Number,
    },
  },
  setup({ data }) {
    const router = useRouter();
    function jump() {
      router.push("/article");
    }

    const ListIconData = ref([
      {
        icon: require("@/assets/view.png"),
        value:data.watch,
        mouseLeave:(e,item)=>{},
        mouseEnter:(e,item)=>{},
        clickHandle:(e,item)=>{}
      },
      {
        icon: require("@/assets/点赞.png"),
        iconEnter:require("@/assets/点赞 (1).png"),
        iconleave:require("@/assets/点赞.png"),
        value:data.like,
        click:false,
        mouseLeave:(e,item)=>{
          if(item.click)return;
          item.icon = item.iconleave
        },
        mouseEnter:(e,item)=>{
          if(item.click)return;
          item.icon = item.iconEnter
        },
        clickHandle:(e,item)=>{
          e.stopPropagation();
          item.icon = item.iconEnter
          item.click = !item.click;
          if(item.click) item.value ++;
          else item.value --;
        }
      },
      {
        icon: require("@/assets/评论.png"),
        iconEnter:require("@/assets/评论 (1).png"),
        iconleave:require("@/assets/评论.png"),
        value:data.comment,
        mouseLeave:(e,item)=>{
          item.icon = item.iconleave
        },
        mouseEnter:(e,item)=>{
          item.icon = item.iconEnter
        },
        clickHandle:(e,item)=>{}
      },
    ]);

    return {
      ListIconData,
      jump,
    };
  },
};
</script>
<style lang="scss" scoped>
.list {
  position: relative;
  &:hover {
    background-color:#fafafa;
  }
  .picture {
    height: 70px;
    width: 70px;
    right: 10px;
    top: 10px;
    background-color: black;
    position: absolute;
    background-size: cover;
  }
  .item-name {
    margin-left: 20px;
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
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    flex-direction: column;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid #e5e6eb;

    .List-icons {
      margin-top: 5px;
      button {
        border: none;
        padding: 0;
        img {
          padding: 0 5px;
          width: 25px;
          object-fit: cover;
        }
      }
    }

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
}
</style>
