<script setup lang="ts">

</script>

<template>
  <div class="sidebar">
    <h1>SideBar</h1>
    <router-link to="/">Timer</router-link>
    <router-link to="/statistics">Statistics</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
}
</style>
