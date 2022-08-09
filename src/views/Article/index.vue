<template>
  <div>
    <Header></Header>
    <comment-out-page>
      <template #main>
        <div class="container1">
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
    <Suspension />
  </div>
</template>

<script setup>
import Header from "@/components/header/Header.vue";
import CommentOutPage from "@/components/outPage/CommentOutPage.vue";
import DetailContent from "@/components/Article/DetailContent.vue";
import CommentSidebar from "@/components/side/CommentSidebar.vue";
import DirectoryNav from "@/components/Article/directoryNav";
import Suspension from "@/components/Suspension.vue"
</script>
<style lang="scss" scoped>
.container1 {
  padding: 24px;
}
</style>
