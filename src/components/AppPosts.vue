<script setup lang="ts">
import AppPostItem from "./AppPostItem.vue";
import { usePostsStore } from "@/stores/posts";

const store = usePostsStore();
</script>
<template>
  <div class="container">
    <AppPostItem
      v-for="item in store.$state"
      :key="item.id"
      :content="item.content"
      :title="item.title"
      :author="item.author.login"
    />
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
