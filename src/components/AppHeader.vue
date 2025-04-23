<script setup lang="ts"></script>
<template>
  <el-header class="header">
    <div class="left">
      <h2 class="logo">App News</h2>
      <el-menu class="nav">
        <a class="nav-link" href="#">Home</a>
      </el-menu>
    </div>
    <div class="right">
      <el-button type="primary" plain>Log In</el-button>
      <el-button type="success" plain>Log Up</el-button>
    </div>
  </el-header>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: #3ee4a4;
  border-bottom: 1px solid #dcdfe6;
}

.left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo {
  margin: 0;
  color: #fff;
}

.nav {
  border: none;
  display: flex;
  background-color: #3ee4a4;
  margin-left: 50px;
}
.nav-link {
  color: #fff;
  text-decoration: none;
}
.right {
  display: flex;
  gap: 12px;
}
</style>
