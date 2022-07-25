<template>
<Header></Header>
 <out-page>
<template #main>
    <Lists/>
    </template>
  </out-page>
</template>

<script setup>
import Header from "@/components/header/Header.vue"
import List from "@/views/Home/component/List.vue"
import OutPage from "@/components/outPage/OutPage.vue"
import Lists from "@/components/content/Lists.vue"
</script>
<style lang="scss" scoped>
.list-content {
  padding: 20px;
}
</style>
