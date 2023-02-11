<template>
    <div class="left">
        <TitleBlock />
        <VerticalNav />
    </div>
</template>

<script setup>
import TitleBlock from './TitleBlock.vue';
import VerticalNav from './VerticalNav.vue';
</script>

<style scoped>
.left {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #dfdada;
    margin: 0;
    padding: 0;
}
</style>