<template>
  <div>
    <comment-out-page>
      <template #main>
        <div class="container">
          <detail-content></detail-content>
          <el-divider></el-divider>
          <list></list>
        </div>
      </template>
    </comment-out-page>
  </div>
</template>

<script setup>
import CommentOutPage from "@/components/outPage/CommentOutPage.vue"
import DetailContent from "@/components/Article/DetailContent.vue"
</script>
<style lang="scss" scoped>
.container {
  padding: 24px;
}
</style>
