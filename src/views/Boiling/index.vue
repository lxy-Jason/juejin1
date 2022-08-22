<template>
  <div>
  <Header></Header>
    <boiling-out-page>
      <template #sideleft>
      <MenuSidebar></MenuSidebar>
      </template>
      <template #main>
        <issue></issue>
        <Family></Family>
      </template>
      <template #sidebar>
      <BoilingSidebar></BoilingSidebar>
      </template>
    </boiling-out-page>
  </div>
</template>

<script setup>
import BoilingOutPage from "@/components/outPage/BothOutPage.vue"
import MenuSidebar from "@/components/side/MenuSidebar.vue"
import Issue from "./components/Issue.vue"
import Header from "@/components/header/Header.vue"
import Family from "./components/Family.vue"
import BoilingSidebar from "@/components/side/BoilingSidebar.vue"
</script>
<style lang="scss" scoped></style>