<script setup>
import { useUserStore } from '../store/user';
import Users_table from './components/users_table.vue';

const { fetchUsers } = useUserStore();

try {
  fetchUsers();
} catch (error) {
  console.error("Felhasználók betoltése sikertelen", error)
}

</script>

<template>
  <div class="container">
    <Users_table/>
  </div>

</template>

<style scoped>

</style>
