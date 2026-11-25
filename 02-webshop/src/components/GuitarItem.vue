<script setup>
import GuitarImage from "./GuitarImage.vue"
import GuitarDescription from "./GuitarDescription.vue"
import GuitarTitle from "./GuitarTitle.vue"

defineProps({
    guitar: {
        type: Object, required: true
    }
})
</script>

<template>
    <div class="left-column"><GuitarImage :title="guitar.title"/></div>
    <div class="right-column"><GuitarTitle :title="guitar.title"/></div>
    <GuitarDescription :content="guitar.description"/>
</template>

<style scoped></style>