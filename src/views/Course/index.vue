<template>
  <div>
  <Header></Header>
    <OutPage>
      <template #main>
       <CourseList></Courselist>
      </template>
      <template #sidebar>
        <RightNavigation/>
      </template>
    </OutPage>
  </div>
</template>

<script setup>
import OutPage from "@/components/outPage/OutPage.vue"
import CourseList from "@/views/Course/components/CourseList.vue"
import Header from "@/components/header/Header.vue"
import RightNavigation from "./components/RightNavigation.vue";
</script>
<style lang="scss" scoped></style>
