<script setup lang="ts">
const props = defineProps({
  content: String,
  title: String,
  author: String,
});
</script>
<template>
  <el-card class="card" style="max-width: 480px">
    <template #header>{{ props.author }}</template>
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
    />
    <h3>{{ props.title }}</h3>
    <template #footer>{{ props.content }}</template>
  </el-card>
</template>
<style scoped>
.card {
  margin-top: 35px;
  margin-left: 30px;
  width: 400px;
}
</style>
