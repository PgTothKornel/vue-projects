<script setup>
import { onMounted } from 'vue';
import { useGuitarStore } from './store/guitars';
import MainNavigation from './components/MainNavigation.vue';
const {guitars, fetchGuitars} = useGuitarStore();

onMounted(async () => {
  await fetchGuitars() ;
  console.log(guitars.value)
})
</script>

<template>
  <div>
    <MainNavigation/>
  </div>
</template>

<style scoped>

</style>
