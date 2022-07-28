<template>
    <ContentBase>
        <div class="row">
            <div class="col-3 img-field">
                <img class="img-fluid" src="@/assets/签到.png" alt="">
            </div>
            <div class="col-9">
                <div class="hello">中午好!
                    <button class="btn btn-outline-primary">去签到</button>
                </div>
            </div>
            <div class="solgan">点亮你在社区的每一天</div>
        </div>

    </ContentBase>
    <div class="col">
        <div class="row-3 img-field">
            <img class="img-fluid" src="@/assets/广告1.png" alt="">
        </div>
        <div class="row-3 img-field">
            <img class="img-fluid" src="@/assets/广告2.png" alt="">
        </div>
    </div>
    <ContentBase>
        <div class="row">
            <div class="col-3 img-field">
                <img class="img-fluid" src="@/assets/下载二维码.png" alt="">
            </div>
            <div class="col-9">
                <div class="download1">下载稀土掘金APP</div>
                <div class="download2">一个帮助开发者成长的社区</div>
            </div>
        </div>
    </ContentBase>
    <ContentBase>
        <div class="row">
            <div class="authors">作者榜</div>
        </div>

    </ContentBase>
</template>

<script>
import ContentBase from '../tools/ContentBase.vue'

export default {
    name: "HomeSiderbar",
    components: {
        ContentBase,
    }
}


</script>

<style scoped>
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

button {
    padding: 2px 4px;
    font-size: medium;
    text-align: right;
}

.slogan {
    font-size: xx-small;
}

.download1 {
    font-size: medium;
}

.download2 {
    font-size: 12px;
}

.authors {
    font-size: 15px;
    text-align: left;
}
</style>