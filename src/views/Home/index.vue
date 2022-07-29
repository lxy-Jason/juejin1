<template>
  <Header></Header>
  <out-page>
    <template #main>
      <Lists />
    </template>
    <template #sidebar>
      <HomeSidebar />
    </template>
  </out-page>
</template>

<script setup>
import Header from "@/components/header/Header.vue"
import List from "@/views/Home/component/List.vue"
import OutPage from "@/components/outPage/OutPage.vue"
import Lists from "@/views/Home/component/Lists.vue"
import NavList from "@/components/header/NavList.vue"
import HomeSidebar from "@/components/side/HomeSidebar.vue";
</script>
<style lang="scss" scoped>
.list-content {
  padding: 20px;
}
</style>
