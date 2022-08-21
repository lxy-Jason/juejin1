<template>
    <div class="rightNavigation">
        <div class="course">
            <img :src="data.book" />
            <span>
                我的课程
            </span>
        </div>
        <div class="generalize">
            <img :src="data.money" />
            <div>
                <strong>推广中心</strong><br />
                <span>扫码下载App</span>
            </div>
            <img :src="data.QRcode" class='QRcode' />
        </div>
        <div class="advertise">
            <img :src="data.vip">
        </div>

        <div class="tradition">
            <strong>掘金课程是什么</strong><br/><br/>
            <span>一个小篇幅、高浓度、成体系、有收益的技术学习平台</span>
        </div>

        <div class="public">
            <strong>关注掘金课程公众号</strong>
            <img :src="data.public"/>
        </div>

        <div class="div5">
            <a>
                <img :src="data.pen"/>
                <div>成为作者</div>
            </a>
            <div></div>
            <a>
                <img :src="data.feedback"/>
                <div>建议反馈</div>
            </a>
        </div>
    </div>
</template>


<script setup>
import { reactive } from "vue";
const data = reactive({
    book: require("@/assets/book.png"),
    money: require("@/assets/money.png"),
    QRcode: require("@/assets/QRcode.svg"),
    vip: require("@/assets/course-vip-entry.4831904.png"),
    public:require('@/assets/wechat-qr.f1926e7.png'),
    pen:require('@/assets/author.c5d975e.png'),
    feedback:require('@/assets/feedback.1230fb5.png'),
})
</script>

<style lang="scss" scoped>
$bg-background: rgb(255, 255, 255);
$bg-background-hover: rgb(249, 249, 249);

.rightNavigation {

    .course {
        box-sizing: border-box;
        padding: 21px 24px;
        background-color: $bg-background;
        cursor: pointer;

        /* display: flex; */
        img {
            height: 28px;
            width: 24px;
        }

        span {
            line-height: 28px;
            vertical-align: top;
        }

        &:hover {
            background-color: $bg-background-hover;
        }

    }

    .generalize {
        display: flex;
        justify-content: space-between;
        margin: 16px 0;
        padding: 16px 16px;
        background-color: $bg-background;

        .QRcode {
            width: 50px;
        }
    }

    .advertise {
        width: 240px;
        height: 200px;

        img {
            width: 240px;
            object-fit: cover;
        }
    }

    .tradition {
        padding: 15px 16px;
        background-color: $bg-background;
        border-bottom: solid  gray 1px;
    }
    .public{
        padding: 12px 16px;
        background-color: $bg-background;
        img{
            width: 208px ;
            margin-top: 5px;
        }
    }
    .div5{
        margin-top: 5px;
        display: flex;
        justify-content:space-around;
        background-color: $bg-background;
        a{
            cursor: pointer;
        }
        padding-bottom: 5px;
        &>div{
            background-color: gray;
            width: 1px;
            height: 79px;
        }
    }
}
</style>