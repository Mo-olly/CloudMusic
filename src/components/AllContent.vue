<template>
    <div class="container">
        <LeftList />
        <RightList />
        <MusicListening />
    </div>
</template>

<script setup>
import MusicListening from './MusicListening.vue';
import LeftList from './LeftList.vue';
import RightList from './RightList.vue';
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    width: 1100px;
    height: 650px;
    margin: 30px auto 20px auto;
    background-color: #f7f7f7;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            
}
</style>