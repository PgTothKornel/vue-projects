<script setup>

import MainNavigation from './components/MainNavigation.vue';

</script>

<template>
  <div>
    <MainNavigation/>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>
