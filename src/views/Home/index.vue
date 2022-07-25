<template>
<Header></Header>
 <out-page>
  <template #main>
  <div class="container">
    <List></List>
      </div>
    </template>
  </out-page>
</template>

<script setup>
import Header from "@/components/header/Header.vue"
import List from "@/views/Home/component/List.vue"
import OutPage from "@/components/outPage/OutPage.vue"
</script>
<style lang="scss" scoped>
.list-content {
  padding: 20px;
}
</style>
