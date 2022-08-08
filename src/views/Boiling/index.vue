<template>
  <div>
  <Header></Header>
    <boiling-out-page>
      <template #sideleft>
      <MenuSidebar></MenuSidebar>
      </template>
      <template #main>
        <issue></issue>
      </template>
      <template #sidebar>
      </template>
    </boiling-out-page>
  </div>
</template>

<script setup>
import BoilingOutPage from "@/components/outPage/BothOutPage.vue"
import MenuSidebar from "@/components/side/MenuSidebar.vue"
import Issue from "./components/Issue.vue"
import Header from "@/components/header/Header.vue"
</script>
<style lang="scss" scoped></style>