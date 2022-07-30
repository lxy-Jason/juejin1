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


    <!-- <el-card>
        <div class="row">
            <div class="col-3 img-field">
                <img class="img-fluid" src="@/assets/下载二维码.png" alt="">
            </div>
            <div class="col-9">
                <div class="download1">下载稀土掘金APP</div>
                <div class="download2">一个帮助开发者成长的社区</div>
            </div>
        </div>
    </el-card> -->

    <el-card>
        <div class="row">
            <div class="authors">作者榜</div>
        </div>
    </el-card>




</template>

<script>


export default {
    name: "HomeSiderbar"
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
</style>