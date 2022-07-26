<template>
  <div>
    <comment-out-page>
      <template #main>
        <div>
          <detail-content></detail-content>
          <el-divider></el-divider>
          <List></List>
        </div>
      </template>
    </comment-out-page>
  </div>
</template>

<script setup>
import CommentOutPage from "@/components/outPage/CommentOutPage.vue"
import DetailContent from "@/components/listContent/DetailContent.vue"
import List from "@/views/Home/component/List.vue"
</script>
<style lang="scss" scoped>
.container {
  padding: 24px;
}
</style>
