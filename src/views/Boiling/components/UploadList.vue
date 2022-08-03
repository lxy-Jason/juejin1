<template>
    <el-upload
      action="#"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      v-model:file-list="files"
      :auto-upload="false"
    >
    <el-icon><Plus /></el-icon>
    </el-upload>
    <el-dialog v-model="flag">
      <img :src="imageUrl" alt="" />
    </el-dialog>
</template>

<script setup>
import { reactive, ref, watch} from "vue"
import { Plus } from '@element-plus/icons-vue'
const emit = defineEmits(["update:files"])
const props = defineProps({
  files: {
    type: Array,
    default: [],
  },
})
const flag = ref(false)
const imageUrl = ref("")
const hide = ref("line-block")
const handlePictureCardPreview=(uploadFile) => {
    imageUrl.value =uploadFile.url
    hide.value="line-block"
    flag.value = true
  };
const handleRemove= (uploadFile, uploadFiles) => {
  if(uploadFiles.length==0)
  {
  hide.value="none";
  }
  // console.log(uploadFile, uploadFiles)
}
</script>

<style lang="scss" scoped>
:deep(.el-upload) {
  display: v-bind(hide);
}
</style>
