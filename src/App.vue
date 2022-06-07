<script setup lang="ts">
import SideBar from "./components/SideBar.vue";

</script>

<template>
  <div class="app">
    <SideBar />
    <!-- Router Outlet -->
    <router-view class="router-view"/>
  </div>
</template>

<style>
.app {
  display: flex;
}

.router-view {
  padding: 20px;
}
</style>