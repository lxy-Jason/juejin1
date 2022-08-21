<template>
  <div class="container">
    <div class="container-header">
    <textarea class="text" placeholder="输入文章标题..." maxlength="60"></textarea>
    <div class="right-gird">
    <span class="save">{{save}}</span>
    <el-button type="primary" plain>草稿箱</el-button>
    <el-button type="primary">发布</el-button>
    <span class="turn">
    <i class="fa fa-exchange" aria-hidden="true"></i>
    </span>
    <img
          class="avatar"
          src="https://s1.ax1x.com/2022/07/23/jXfLUP.jpg"
          alt=""
        />
    </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";
export default{
    data() {
    return{
        save:"文章将自动保存至草稿箱",
    }
    },
    mounted(){
        this.keyDown() // 监听键盘
    },
    destroyed(){
      //取消键盘监听事件
        document.onkeydown = null
    },
    methods:{
     // 监听键盘
        keyDown() {
            let e1;
            document.onkeydown =  (e) => {
                //事件对象兼容
                e1 = e || event || window.event || arguments.callee.caller.arguments[0]
                if(e1){
                    // console.log("111");
                    this.save="保存中..."
                }
            }
             document.onkeyup =()=>{
                 if(e1){
                     this.save="保存成功";
                     e1=null;
                 }
                }
            }
    }
}
</script>

<style lang="scss" scoped>
.container {
  background: white;
  position: sticky;
  top: 0px;
  z-index: 99;
  .container-header {
    max-width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    .text{
        margin-left:40px;
        border:none;
        resize: none;
        outline:none;
        width:65%;
        font-size:30px;
        height:60px;
        line-height:60px;
        vertical-align:middle;
        font-family: Arial, Helvetica, sans-serif;
    }
    .right-gird{
        width:35%;
        flex: 1;
        text-align: right;
        margin-right:30px;
        .save{
            margin-right:30px;
            font-size:14px;
            opacity:0.3;
        }
        .turn{
            margin-left:20px;
            opacity:0.5;
        }
        .avatar {
            position:relative;
            width: 30px;
            height: 30px;
            object-fit: cover;
            border-radius: 50%;
            margin-left: 15px;
            top:9px;
            }
        
    }
  }
}
</style>
