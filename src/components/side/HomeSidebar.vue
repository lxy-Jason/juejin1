<template>
    <el-card>
        <el-row>
            <el-col :span="4">
                <img class="sign-in" src="@/assets/签到.png" alt="">
            </el-col>
            <el-col :span="12">
                <div class="hello">上午好！</div>
            </el-col>
            <el-col :span="8">
                <el-button round plain type="primary" class="button">去签到</el-button>
            </el-col>
        </el-row>
        <el-row>
            <div class="slogan">点亮你在社区的每一天</div>
        </el-row>

    </el-card>
<div class="affix">
    <div class="col">
        <div class="row-3 img-field">
            <img class="img-fluid" src="@/assets/广告1.png" alt="">
        </div>
        <div class="row-3 img-field">
            <img class="img-fluid" src="@/assets/广告2.png" alt="">
        </div>
    </div>
    <el-card>
        <el-row>
            <el-col :span="6">
                <img class="QR-code" src="@/assets/下载二维码.png" alt="">
            </el-col>
            <el-col :span="18">
                <div class="download1"> 下载稀土掘金APP</div>
                <div class="download2"> 一个帮助开发者成长的社区</div>
            </el-col>
        </el-row>
    </el-card>
</div>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>作者榜</span>
            </div>
        </template>
        <div v-for="author in authors" :key="author.id" class="authors">

            <el-row>
                <el-col :span="8">
                    <img class="author-photo" :src="author.photo" alt="">
                </el-col>
                <el-col :span="16">
                    <div class="username"> {{ author.username }}
                        {{ author.grade }}
                    </div>
                    <div class="tag">{{ author.title }}</div>
                </el-col>
            </el-row>

        </div>
        <el-divider />
        <div class="more">完整榜单&nbsp;&gt; </div>
    </el-card>


    <el-card>
        <el-row>
            <el-col :span="6">
                <img class="guide-photo"
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png" alt="">
            </el-col>
            <el-col :span="18">
                <div class="guide">稀土掘金漫游指南</div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="6">
                <img class="guide-photo"
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"
                    alt="">
            </el-col>
            <el-col :span="18">
                <div class="guide">安装掘金浏览器插件</div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="6">
                <img class="guide-photo"
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png"
                    alt="">
            </el-col>
            <el-col :span="18">
                <div class="guide">前往掘金翻译计划</div>
            </el-col>
        </el-row>
    </el-card>

    <div class="baseinfo">
        <div>用户协议 营业执照 隐私政策 关于我们</div>
        <div>站点地图 使用指南 友情链接 更多文章</div>
        <div>京ICP备18012699号-3</div>
        <div>
            <img class="police-logo"
                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png" alt="">
            京公网安备11010802026719号<img>
        </div>
        <div>版权所有: 北京信息路技术有限公司</div>
        <div>公司地址: 北京市海淀区信息路甲28号13层B座138-5</div>
        <div>公司座机: 010-83434395</div>
        <div>举报邮箱: feedback@xitu.io</div>
        <div>&copy;2022 稀土掘金</div>
        <img width="25px" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.0cd39f5.png" alt="">
        <img width="25px" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.ce329e6.png"
            alt="">
    </div>




</template>


<script>
import { ref } from 'vue'

export default {
    name: 'HomeSidebar',
    setup() {
        const authors = ref([
            {
                id: '1',
                username: 'jsmask',
                title: '前端修仙者',
                photo: 'https://p3-passport.byteacctimg.com/img/user-avatar/3cc923506359b8170e1d8b9051bb2bef~300x300.image',
                grade: 'lv5',
            },
            {
                id: '2',
                username: '小孔菜菜',
                title: '前端开发',
                photo: 'https://p9-passport.byteacctimg.com/img/user-avatar/a34d03bc21a26ef41d2853e4fd567630~300x300.image',
                grade: 'lv3',
            },
            {
                id: '3',
                username: '易师傅',
                title: '前端搬砖师傅 @ One Piece',
                photo: 'https://p9-passport.byteacctimg.com/img/user-avatar/c01c52dcc59b98c1b026eb96f408329f~300x300.image',
                grade: 'lv5',
            },
        ])
        return {
            authors,
        }
    },
    mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollY = window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let scrollObj = document.querySelector(".affix");
      if (scrollY > 1300) {
        scrollObj.style.position = "sticky";
        scrollObj.style.top="120px";
      } else {
        scrollObj.style.position = "static";
        scrollObj.style.marginTop = "0";
      }
    }
  },
  destroyed() {
  //销毁监听
    window.removeEventListener("scroll", this.handleScroll);
  },


}


</script>

<style scoped>
.sign-in {
    width: 20px;
}

.img-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;
}

.hello {
    font-weight: 500;
    font-size: large;
    text-align: left;
}

.button {
    color: #4D9BFF;
}

.slogan {
    font-size: small;
    text-align: center;
}

.download1 {
    font-size: medium;
    text-align: center;
}

.download2 {
    font-size: 12px;
    text-align: center;
}

.authors {
    font-size: 15px;
    text-align: left;
}

.QR-code {
    width: 50px;
}

.card-header {
    font-size: 15px;
}

.card-footer {
    font-size: 13px;
}

.author-photo {
    width: 50px;
    border-radius: 50%;
}

.more {
    text-align: center;
    color: #007FFF;
    font-size: 15px;
}

.guide-photo {
    width: 30px;
}

.police-logo {
    width: 18px;
}

.guide {
    font-size: 15px;
}

.baseinfo {
    font-size: 13px;
    font-weight: lighter;
}
</style>