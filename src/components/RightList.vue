<template>
    <div class="right">
        <HorizontalNav />
        <router-view />
    </div>
</template>

<script setup>
import HorizontalNav from './HorizontalNav.vue';
</script>

<style scoped>
.right {
    width: 80%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>