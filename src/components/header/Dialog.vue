<template>
  <el-button text @click="dialogTableVisible = true"><i class="fa fa-gg-circle" aria-hidden="true"></i>&ensp;发沸点</el-button>
  <el-dialog v-model="dialogTableVisible" title="沸点" :close-on-click-modal="false">
  <Issue></Issue>
  </el-dialog>
</template>
<script setup>
import Issue  from "@/views/Boiling/components/Issue";
import { reactive, ref } from 'vue'
const dialogTableVisible = ref(false)
</script>