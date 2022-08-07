<template>
  <div class="container" :class="[hiddenTop ? 'hiddenTop' : 'showTop']">
    <div class="container-header">
      <div class="left-grid">
        <i class="fa fa-mars iconmargin" style="color: #333"></i>南通掘金
      </div>

      <div class="mid-grid">
        <div class="nav" v-for="(content, index) in contents" :key="index" @click="routerLink(content)">
          {{ content }}
        </div>

        <div class="search">
          <el-input placeholder="搜索稀土掘金" suffix-icon="Search"></el-input>
        </div>

        <div class="button">
          <el-button type="primary">创作者中心</el-button>
        </div>
      </div>

      <div class="right-gird">
        <i class="fa fa-vimeo-square" aria-hidden="true"></i>
        <div class="rainbow">SVIP</div>
        <el-icon class="message-icon">
          <BellFilled />
        </el-icon>

        <img
          class="avatar"
          src="https://s1.ax1x.com/2022/07/23/jXfLUP.jpg"
          alt=""
        />
      </div>
    </div>
    <div v-show="show">
      <div class="divide"></div>
      <NavList></NavList>
    </div>
  </div>
</template>

<script>
import NavList from "@/components/header/NavList.vue";
//还是先用着吧，有ui错误，目前思路是切换页面再隐蔽navlist
import { Search } from "@element-plus/icons";
import {created,methods} from "vue"
import { useRouter } from 'vue-router';
export default {
  components: {
    Search,
    NavList,
  },
  created() {
   window.addEventListener('scroll', this.windowScrollListener);//绑定监听事件
    if (this.$route.name==='home')
    {
        this.show = true
    }
},
watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "fetchDate"
    },
methods:{
   windowScrollListener() {//滚动条离顶部距离大于400隐藏,小于400或者上拉显示
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  let scrollStep = scrollTop - this.oldScrollTop;
  this.oldScrollTop = scrollTop;
  if (scrollTop >= 400) {
    this.hiddenTop = true;
  }
  if (scrollTop < 400||scrollStep<0) {
    this.hiddenTop = false;
  }
 },
   fetchDate(){//判断是否在指定路由中
        if (this.$route.name!=='home'){
          this.show = false
        }else {
          this.show = true
        }
      }
},
setup(){
  const router = useRouter();
  const routerLink=(content)=>{//路由跳转
  if(content=="沸点")
  router.push('/boiling');
};
return{
  routerLink
}
},
  data() {
    return {
      contents: ["首页", "沸点", 1111, 1111, 1111, 1111],
      oldScrollTop: 0,
      hiddenTop:false,
      show: false
    };
  },
};
</script>

<style lang="scss" scoped>
.hiddenTop {
  transform: translateY(-62px);
  transition: all 0.2s linear;
}
.showTop {
  transform: translateY(0px);
  transition: all 0.2s linear;
}
.container {
  background: white;
  position: sticky;
  top: 0px;
  z-index: 9999;
  box-shadow: 0px 0px 5px rgb(228, 227, 227);
  .container-header {
    max-width: 1200px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    display: flex;
  }

  .left-grid {
    font-size: 20px;
    font-family: FZShuTi;

    .iconmargin {
      margin-right: 5px;
    }
  }
  .mid-grid {
    flex: 1;
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    .nav {
      box-sizing: border-box;
      padding: 0px 10px;
      font-size: 15px;
      cursor: pointer;
      margin: auto;
      color: #71777c;
    }

    .search {
      margin-left: 50px;
    }

    .button {
      margin-left: 20px;
    }

    :deep(.el-button--small) {
      font-size: 14px;
      padding: 8px 15px;
    }

    :deep(.el-button--primary) {
      background: #1e80ff;
    }

    :deep(.el-button--primary.is-plain) {
      background: #e8f3ff;
      color: #1e80ff;
    }
    :deep(.el-button--primary.is-plain:hover) {
      background: #1e80ff;
      color: white;
    }
    .nav:hover {
      color: #1e80ff;
      transition: all 0.2s;
      transform: scale(1.2);
    }
    .active {
      color: #1e80ff;
    }
  }
  .right-gird {
    margin-left: auto;
    display: flex;
    align-items: center;
    .message-icon {
      margin-left: 15px;
      font-size: 25px;
      color: rgb(114, 101, 101);
    }

    .rainbow {
      font-family: STXingkai;
    }

    .avatar {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 50%;
      margin-left: 15px;
    }
  }

  .divide {
    height: 2px;
    width: 100%;
    box-shadow: 0px 0px 2px rgb(228, 227, 227);
  }
}
</style>
