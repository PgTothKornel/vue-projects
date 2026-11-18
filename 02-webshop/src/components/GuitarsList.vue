<script setup>
import { onMounted } from 'vue';
import { useGuitarStore } from '@/store/guitars';
import GuitarItem from './GuitarItem.vue';
const {guitars, fetchGuitars} = useGuitarStore();

onMounted(async () => {
  await fetchGuitars() ;
  console.log(guitars.value)
})
</script>

<template>
    <div class="guitars">
        <GuitarItem v-for="guitar in guitars" :key="guitar.id" :guitar="guitar"/>
    </div>
</template>

<style scoped>
</style>