<script setup lang="ts">
import { ref } from "vue";
import AppPostItem from "./AppPostItem.vue";

const arr = ref([
  {
    id: 2,
    title: "react",
    content: "it is react",
    tags: [],
    author: {
      id: 1,
      login: "vitalik",
      avatarUrl: null,
    },
  },
  {
    id: 1,
    title: "javascript",
    content: "it is javascript",
    tags: [],
    author: {
      id: 1,
      login: "vitalik",
      avatarUrl: null,
    },
  },
  {
    id: 3,
    title: "vue",
    content: "it is vue ",
    tags: [],
    author: {
      id: 1,
      login: "vitalik",
      avatarUrl: null,
    },
  },
]);
</script>
<template>
  <div class="container">
    <AppPostItem
      v-for="item in arr"
      :key="item.id"
      :id="item.id"
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
