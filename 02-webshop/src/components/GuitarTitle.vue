<script setup>

defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>

<template>
    <p>{{ title }}</p>
</template>

<style scoped>

</style>