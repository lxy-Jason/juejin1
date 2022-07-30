<template>
  <div>
    <comment-out-page>
      <template #main>
        <div class="container">
          <detail-content></detail-content>
          <el-divider></el-divider>
        </div>
      </template>
      <template #sideleft>
        <comment-sidebar></comment-sidebar>
      </template>
      <template #sidebar>
        <directory-nav></directory-nav>
      </template>
    </comment-out-page>
  </div>
</template>

<script setup>
import CommentOutPage from "@/components/outPage/CommentOutPage.vue";
import DetailContent from "@/components/Article/DetailContent.vue";
import CommentSidebar from "@/components/side/CommentSidebar.vue";
import DirectoryNav from "@/components/Article/directoryNav";
</script>
<style lang="scss" scoped>
.container {
  padding: 24px;
}
</style>
