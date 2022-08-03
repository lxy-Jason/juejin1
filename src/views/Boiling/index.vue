<template>
  <div>
    <boiling-out-page>
      <template #sideleft>
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
import Issue from "./components/Issue.vue"
</script>
<style lang="scss" scoped></style>