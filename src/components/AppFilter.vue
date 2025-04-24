<script setup lang="ts">
import { ref } from "vue";
const input = ref("");
const value = ref("");
const options = [
  {
    value: "Option1",
    label: "Загаловок",
  },
  {
    value: "Option2",
    label: "Описание",
  },
  {
    value: "Option3",
    label: "Автор",
  },
];
</script>
<template>
  <div class="container">
    <el-input class="input-filter" v-model="input" placeholder="Please input" />
    <el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;
}
.input-filter {
  display: flex;
  width: 400px;
}
</style>
