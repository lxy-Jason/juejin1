<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <el-col :span="6">
                    <img class="icon"
                        src="https://p6-passport.byteacctimg.com/img/user-avatar/de432cd6200bc3d3f7d633a3ccd528d8~300x300.image"
                        alt="">
                </el-col>
                <el-col :span="18">
                    <el-row>
                        <div class="text">青训营官方账号&nbsp;&nbsp;lv5</div>
                    </el-row>
                    <el-row>
                        <div class="text">前端开发工程师</div>
                    </el-row>
                </el-col>
            </div>
        </template>
        <el-row>
            <el-col :span="3">
                <img class="thumbs-up" src="@/assets/点赞.png" alt="">
            </el-col>
            <el-col :span="21">
                <div class="text">获得点赞&nbsp;1,510</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="3">
                <img class="thumbs-up" src="@/assets/view.png" alt="">
            </el-col>
            <el-col :span="21">
                <div class="text">文章被阅读&nbsp;370,803</div>
            </el-col>
        </el-row>
    </el-card>
    <a href="https://www.bagevent.com/event/8100960?bag_track=digg">
        <img class="ad"
            src="https://img.bagevent.com/resource/20220624/115449383150.jpg?imageView2/2/w/1920/interlace/1/q/100&lazy=0"
            alt="">
    </a>
    <a href="https://juejin.cn/post/7120441631530549284?utm_source=tofu&utm_medium=doufukuai&utm_campaign=cykf202207">
        <img class="ad1"
            src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/871afb35a64042029f83da9e31be3240~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?"
            alt="">
    </a>
    <a href="https://juejin.cn/pin/7129325398046801933">
        <img class="ad" src="@/assets/zumeng.png" alt="">
    </a>
    <a href="https://ohayoo.cn/activity/developer-meeting">
        <img class="ad" src="@/assets/开发者大会.png" alt="">
    </a>
    <el-card class="card-box">

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

    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>相关文章</span>
            </div>
        </template>
        <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
        <div v-for="article in articles" :key="article.id">
            <div class="text" v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)">{{
                    article.title
            }}</div>
            <el-row>
                <el-col class="article" :span="16">{{ article.praise }} 点赞. {{ article.comment }} 评论</el-col>
            </el-row>
        </div>
    </el-card>

</template>

<script>

import { ref } from 'vue'



export default {
    name: 'ArticalSideBar',

    methods: {
        changeActive($event) {
            $event.currentTarget.className = "things active";
        },
        removeActive($event) {
            $event.currentTarget.className = "things";
        }
    },

    setup() {
        const articles = ref([
            {
                id: '1',
                title: '字节跳动是如何落地微前端的',
                praise: '356',
                comment: '14',
            },
            {
                id: '2',
                title: '记笔记,赢大礼!笔记创作活动来啦!|青训营第四期',
                praise: '49',
                comment: '57',
            },
            {
                id: '3',
                title: '第四届青训营阅读打卡活动来啦,奖品规则全面升级,快来学习吧',
                praise: '92',
                comment: '48',
            },
            {
                id: '4',
                title: '字节跳动最爱考的前端面试题:CSS基础',
                praise: '2032',
                comment: '62',
            },
            {
                id: '5',
                title: '字节跳动最爱考的前端面试题:JavaScript基础',
                praise: '3829',
                comment: '432',
            },
        ])
        return {
            articles,
        }
    }

}

</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* .things {
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 0.37rem;
    text-align: center;
    line-height: 3rem;
    margin: 0.8rem auto;
    background: #f4f5f7;
    color: #666666;
} */

.active {
    color: #A092FF;
}

.text {
    font-size: 14px;
    text-align: left;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 240px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.QR-code {
    width: 50px;
}

.download1 {
    font-size: medium;
    text-align: center;
}

.download2 {
    font-size: 12px;
    text-align: center;
    font-weight: lighter;
}

.icon {
    width: 50px;
    border-radius: 50%;
}

.article {
    font-size: 14px;
    text-align: left;
    font-weight: lighter;
    margin-bottom: 8px;
}

.thumbs-up {
    width: 20px;
}

.ad {
    width: 240px;
    margin-bottom: 15px;
}

.ad1 {
    width: 240px;
    height: 70px;
    margin-bottom: 15px;
}
</style>