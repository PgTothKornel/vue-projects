<script setup>

import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="nav">
        <ul>
            <li><router-link :to="{ name: 'guitarList'}">Guitars</router-link></li>
        </ul>

        GuitarsListView
    </nav>
</template>

<style>
.nav {
    background-color: var(--dark);
}
</style>