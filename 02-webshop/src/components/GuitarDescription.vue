<script setup>

defineProps({
    content: {
        type: String,
        required: true
    }
})

</script>

<template>
    <p>{{ content }}</p>
</template>

<style scoped>
.guitar_img {
    height: 15rem;
    float: left;
}
</style>