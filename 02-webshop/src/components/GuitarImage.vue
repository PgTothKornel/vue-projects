<script setup>

defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>

<template>
    <img :src="`/${title}.jpg`" :alt="`${title}`" class="guitar_img">
</template>

<style scoped>
.guitar_img {
    height: 15rem;
    float: left;
}
</style>