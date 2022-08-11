<template>
  <div class="issue-box">
    <div>
       <el-input type="textarea" v-model="textValue" :autosize="{ minRows: 3 }" placeholder="快来和掘友一起击剑吧">
      </el-input>
      <div class="topic-warpper">
        
        <moments-pop>
        <template #default>
            <span class="new-topic"><i class="fa fa-dot-circle-o icon"></i>请选择圈子</span>
          </template>
        </moments-pop>
        
        <div class="topic-upload hideUpload">
          <upload-list v-model:files="fileList"></upload-list>
        </div>

        <div class="topic-counter" :class="[textValue.length > 1000 ? 'topic-counter-warning' : '']">{{ textValue.length }}/1000</div>
      </div>
    </div>
    <div class="footer">
      <div class="tool">
           <emoji @getEmoji="getEmoji">
          <template #default>
            <span><i class="fa fa-smile-o"></i>表情</span>
          </template>
        </emoji>
        <span @click="eventDelegation">
          <i class="fa fa-picture-o"></i>图片
          <input type="file" id="uploadInput" ref="dom" @change="changeInput" style="display:none"/><!--隐藏选择文件夹-->
        </span>
        <link-pop>
          <template #default @getLink="getLink">
            <span> <i class="fa fa-link"></i> 链接</span>
          </template>
        </link-pop>

         <topic-pop @getTopic="getTopic">
          <template #default>
            <span> <i class="fa fa-commenting-o"></i> 话题</span>
          </template>
        </topic-pop>
      </div>
      <div class="button">
        <el-button type="primary" size="small">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MomentsPop from "./MomentsPop.vue";
import emoji from "./emoji.vue";
import uploadList from "./UploadList.vue";
import LinkPop from "./LinkPop.vue"
import TopicPop from "./TopicPop.vue"
import {ref,reactive, computed} from "vue";
const textValue=ref("#新人报道#");
const dom = ref();
const fileList = ref([]);
const eventDelegation = () => {
  dom.value.click()
}
const hide = computed(() => {
  return fileList.value.length > 0 ? "block" : "none"
})//照片墙显示或隐藏
const changeInput = () => {
  if (!dom.value.files[0]) {
    return
  }
  const blob = new Blob([dom.value.files[0]], {type: "image/png",});
  let url = URL.createObjectURL(blob);
  // console.log(dom.value.files[0]);
  // console.log(blob);
  fileList.value.push({url: url});
  // console.log(fileList.value)
}
const getEmoji = (data) => {
  textValue.value += data
}
const getTopic = (data) => {
  textValue.value += data
}
const getLink = (data) => {
  textValue.value += data
}
</script>
<style lang="scss" scoped>
.issue-box {
  width: 100%;
  background: white;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 2px;
  :deep(.el-textarea__inner) {
    background-color: #f4f5f5;
    resize:none;
    border-width:0px;
    border-radius:0px;
    border-style:none;
    border:none;
    outline:none;
  }
  .topic-warpper {
    box-sizing: border-box;
    width: 100%;
    background-color: #f4f5f5;
    padding: 12px;
    .new-topic {
      font-size: 13px;
      color: #1e80ff;
      background: #fff;
      padding: 5px 15px;
      border-radius: 50px 50px 50px 0px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      .icon {
        margin-right: 5px;
      }
    }
    .topic-upload {
      margin-top: 20px;
    }
    .topic-counter {
      margin-top: 5px;
      font-size: 13px;
      text-align: right;
      color: #4e5969;
    }
    .topic-counter-warning {
      color: rgb(236, 120, 120);
    }
  }
  .footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tool {
      display: flex;
      align-items: center;
      span {
        margin-right: 20px;
        cursor: pointer;
        color: #4e5969;
        font-size: 14px;
      }
      i {
        margin-right: 2px;
      }
    }
    :deep(.el-button--primary) {
      background: #1e80ff;
      padding: 0px 20px;
      font-size: 14px;
    }
  }
  .hideUpload {
    display: v-bind(hide);
  }
}
</style>
