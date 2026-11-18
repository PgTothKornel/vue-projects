<script setup>

import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="nav">
        <ul class="nav_list">
            <li><router-link :to="{ name: 'guitarList'}">Guitars</router-link></li>
            <li><router-link :to="{ name: 'cart'}">Cart</router-link></li>
        </ul>
    </nav>
</template>

<style>
.nav {
    background-color: var(--dark);
}

.nav_list {
    padding: 1rem 0;
    display: flex;
    justify-content: space-evenly;
}
</style>